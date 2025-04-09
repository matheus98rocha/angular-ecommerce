export function isObjectInArray<T>({
  array,
  obj,
}: {
  array: T[];
  obj: T;
}): boolean {
  return array.some((item) => item, obj);
}
