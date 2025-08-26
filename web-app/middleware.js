import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // if (!token || !token.user || (token.exp && new Date(token.exp * 1000) < new Date())) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // const role = token.user.role;
  // const url = req.nextUrl;

  // if (url.pathname.startsWith("/dashboard/admin") && role !== "Admin") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // if (url.pathname.startsWith("/dashboard/student") && role !== "Student") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // if (url.pathname.startsWith("/dashboard/instructor") && role !== "Instructor") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/admin/:path*", "/dashboard/student/:path*", "/dashboard/instructor/:path*"],
};