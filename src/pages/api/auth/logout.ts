export const prerender = false;

export async function POST({ cookies }: { cookies: any }) {
  cookies.delete('admin_session', { path: '/' });
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
