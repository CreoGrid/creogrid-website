import { supabase } from './client'

export async function attachSupabaseAuth(next: (headers?: Record<string, string>) => unknown) {
  const { data } = await supabase.auth.getSession()
  const token = data.session?.access_token
  return next(token ? { Authorization: `Bearer ${token}` } : {})
}
