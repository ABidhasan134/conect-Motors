import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  const token = request.cookies.get('next-auth.session-token');
  console.log('This token is from middleware:', token);

  // Redirect to login page if no token
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  // Example redirection for '/'
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashbord', '/blogs'],
};
