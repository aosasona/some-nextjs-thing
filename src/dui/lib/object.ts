export function merge<T>(a: T, b: T): T {
  return { ...a, ...b };
}
