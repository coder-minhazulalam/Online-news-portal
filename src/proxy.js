import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export const proxy = async(request) => {
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

console.log(session)

   if(session)
   {
    return NextResponse.next()
   }

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/career' , '/news/:path*' ],
}