import { NextRequest, NextResponse } from "next/server";

// Map custom domains to provider handles
const CUSTOM_DOMAINS: Record<string, string> = {
  "deankroker.com": "dean",
  "www.deankroker.com": "dean",
  "croker.me": "dean",
  "www.croker.me": "dean",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.replace(/:\d+$/, "") ?? "";
  const handle = CUSTOM_DOMAINS[host];

  if (handle) {
    // Rewrite to the provider's profile page
    const url = request.nextUrl.clone();
    url.pathname = `/${handle}`;
    url.searchParams.set("embed", "1");
    const response = NextResponse.rewrite(url);
    response.headers.set("x-embed", "1");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Only run on root path for custom domains
    "/",
  ],
};
