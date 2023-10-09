import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import nookies from "nookies";
import { useAuth } from "./hooks/useAuth";

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("motorshop.token");

  // if (!cookies) {
  //   if (request.nextUrl.pathname.startsWith("/profile")) {
  //     return NextResponse.rewrite(new URL("/", request.url));
  //   }
  // }

  return NextResponse.next();
}
