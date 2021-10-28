export const divideArrayInHalf = <T>(items: T[]): [T[], T[]] => {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
};
