export async function requireSupabaseAuth<T>(next: (value: T) => unknown) {
  return next({} as T);
}
