// import { NextRequest, NextResponse } from 'next/server';
// import { KEYS } from '@/shared/config/keys';
//
// export async function GET(request: NextRequest) {
//   const code = request.nextUrl.searchParams.get('code');
//
//   if (!code) {
//     return NextResponse.redirect(new URL('/login?error=no_code', request.url));
//   }
//
//   const response = await fetch(`${KEYS.API_URL}/auth/google/exchange/`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ code }),
//   });
//
//   if (!response.ok) {
//     return NextResponse.redirect(
//       new URL('/login?error=google_auth_failed', request.url)
//     );
//   }
//
//   const data = await response.json();
//
//   const res = NextResponse.redirect(new URL('/', request.url));
//
//   res.cookies.set('access', data.access, {
//     httpOnly: true,
//     secure: true,
//     path: '/',
//   });
//
//   res.cookies.set('refresh', data.refresh, {
//     httpOnly: true,
//     secure: true,
//     path: '/',
//   });
//
//   return res;
// }