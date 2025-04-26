import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define the paths that should redirect to their respective homepage sections
  const pathsToRedirect = [
    '/about',
    '/services',
    '/solutions',
    '/training-programs',
    '/faq',
    '/contact',
  ];

  // Check if the current pathname matches one of the paths to redirect
  if (pathsToRedirect.includes(pathname)) {
    const section = pathname.slice(1); // Remove the leading "/" to get the section name
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.hash = section; // Set the hash to the section name (e.g., #contact)
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/about', '/services', '/solutions', '/training-programs', '/faq', '/contact'],
};