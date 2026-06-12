export const prerender = false;

async function computeToken(username: string, password: string, secret: string): Promise<string> {
  const data = new TextEncoder().encode(username + ':' + password + ':' + secret);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function POST({ request, cookies, redirect }: { request: Request; cookies: any; redirect: any }) {
  const data = await request.formData();
  const username = data.get('username') as string;
  const password = data.get('password') as string;

  const validUsername = import.meta.env.ADMIN_USERNAME;
  const validPassword = import.meta.env.ADMIN_PASSWORD;
  const secret = import.meta.env.SESSION_SECRET;

  if (username === validUsername && password === validPassword) {
    const token = await computeToken(username, password, secret);
    cookies.set('admin_session', token, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });
    return redirect('/admin/');
  }

  return redirect('/login/?error=1');
}
