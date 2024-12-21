import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/utils/constants";
import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";

export async function createSupabaseServerClient(
  response: NextResponse,
  request: NextRequest
) {
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });
}

const createSupabaseClient = (option: SupabaseClientOptions<string>) =>
  createClient(SUPABASE_URL, SUPABASE_ANON_KEY, option);

export const supabaseAuthClient = createSupabaseClient({
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
