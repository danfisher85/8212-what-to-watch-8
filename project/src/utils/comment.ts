export const divideArrayInHalf = <T>(items: T[]): [T[], T[]] => {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
};

export const checkCommentStatus = (comment: string, min: number, max: number): boolean => comment.length >= min && comment.length <= max;
