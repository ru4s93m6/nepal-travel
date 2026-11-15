import { defineMiddleware } from 'astro:middleware';

async function computeToken(username: string, password: string, secret: string): Promise<string> {
  const data = new TextEncoder().encode(username + ':' + password + ':' + secret);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Handle login POST directly — i18n routing would block the API endpoint entirely
  if (
    (pathname === '/api/auth/login' || pathname === '/api/auth/login/') &&
    context.request.method === 'POST'
  ) {
    const data = await context.request.formData();
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    const validUsername = import.meta.env.ADMIN_USERNAME;
    const validPassword = import.meta.env.ADMIN_PASSWORD;
    const secret = import.meta.env.SESSION_SECRET;

    if (username === validUsername && password === validPassword) {
      const token = await computeToken(username, password, secret);
      context.cookies.set('admin_session', token, {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24,
        path: '/',
      });
      return context.redirect('/admin/');
    }
    return context.redirect('/login/?error=1');
  }

  // Protect bookings API — require valid session cookie, return 401 otherwise
  if (pathname.startsWith('/api/bookings')) {
    const sessionCookie = context.cookies.get('admin_session')?.value;
    const validToken = await computeToken(
      import.meta.env.ADMIN_USERNAME,
      import.meta.env.ADMIN_PASSWORD,
      import.meta.env.SESSION_SECRET
    );
    if (!sessionCookie || sessionCookie !== validToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // For /login and /admin pages, i18n routing overrides the status to 404
  // even though the pages render correctly. Fix the status after next().
  if (pathname.startsWith('/login') || pathname.startsWith('/admin')) {
    const response = await next();

    if (response.status === 404) {
      const location = response.headers.get('location');
      if (location) {
        // Route handler issued a redirect but i18n changed status to 404 — restore it
        return new Response(null, { status: 302, headers: response.headers });
      }
      // Page rendered correctly but i18n set 404 — restore 200
      return new Response(response.body, { status: 200, headers: response.headers });
    }

    return response;
  }

  return next();
});
