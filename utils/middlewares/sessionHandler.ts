import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/utils/supabase/server";
import { COOKIES_NAMES, HEADERS } from "../constants";

export const sessionHandler = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const token = request.cookies.get(COOKIES_NAMES.ACCESS_TOKEN)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const supabaseClient = await createSupabaseServerClient(response, request);

  const user = await supabaseClient.auth.getUser(token);

  if (user.error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
};

export const sessionApiHandler = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabaseClient = await createSupabaseServerClient(response, request);

    const token = request.cookies.get(COOKIES_NAMES.ACCESS_TOKEN)?.value;

    const user = await supabaseClient.auth.getUser(token);

    if (user.error) {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    const headers = new Headers(request.headers);
    headers.set(HEADERS.UID, user.data.user.id);

    return NextResponse.next({
      request: {
        headers,
      },
    });
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
