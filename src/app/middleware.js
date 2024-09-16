import { NextResponse } from 'next/server'
 
// we can chack the 
const user=false;
export function middleware(request) {
    if(!user){
  return NextResponse.redirect(new URL('/login', request.url))
}
 return NextResponse.next()
}
 
export const config = {
  matcher: '/about',
}