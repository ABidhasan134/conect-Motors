import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
// we can chack the 
const user=false;
export function middleware(request) {
  const token = cookies(request).get('next-auth.session-token');
  console.log(token);
    if(!token){
  return NextResponse.redirect(new URL('/api/auth/signin', request.url))
}
 return NextResponse.next()
}
 
export const config = {
  matcher: ['/dashbord'],
}