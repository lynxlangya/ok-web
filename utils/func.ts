/** 排序 */
export const sortBy = <T extends Record<string, any>, K extends keyof T>(
  arr: T[],
  k: K
): T[] => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));

/** Image loader */
export const imageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
