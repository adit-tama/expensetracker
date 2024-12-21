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
    autoRefreshToken: false,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// export const createClient = async () => {
//   const cookieStore = await cookies();

//   return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
//     cookies: {
//       getAll() {
//         return cookieStore.getAll();
//       },
//       setAll(cookiesToSet) {
//         try {
//           cookiesToSet.forEach(({ name, value, options }) => {
//             console.log(options);
//             cookieStore.set(name, value);
//           });
//         } catch (error) {
//           // The `set` method was called from a Server Component.
//           // This can be ignored if you have middleware refreshing
//           // user sessions.
//         }
//       },
//     },
//   });
// };
