import { Session } from "inspector";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(async function middleware(request) {
  const { token } = request.nextauth;

  if (!Session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)"],
};
