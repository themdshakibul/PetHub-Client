import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const sesson = await auth.api.getSession({
    headers: await headers(),
  });

  if (!sesson) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/add-pate",
    "/dashboard/my-listings",
    "/dashboard/my-requiest",
    "/dashboard/edit-pate/:path",
    "/all-pate/:path",
  ],
};
