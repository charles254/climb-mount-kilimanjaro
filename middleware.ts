import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl;

  // Redirect www → non-www
  if (hostname === "www.kiligo.net") {
    return NextResponse.redirect(
      `https://kiligo.net${pathname}${search}`,
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml).*)",
};
