import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });



//   if (!token || !token.user || new Date(token.exp * 1000) < new Date()) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   const role = token.user.role;
//   const url = req.nextUrl;

//   console.log(role,url,token);
  
  
//   if (url.pathname.startsWith("/view-admin") && role !== "admin") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (url.pathname.startsWith("/view-student") && role !== "Student") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (url.pathname.startsWith("/view-instructor") && role !== "Instructor") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
}

export const config = {
    matcher: ["/view-admin/:path*", "/view-student/:path*", "/view-instructor/:path*"],
  };