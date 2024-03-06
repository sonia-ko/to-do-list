export const generateUniqueId = (prefix: string = ""): string => {
  const uniquePart: string =
    Date.now().toString(36) + Math.random().toString(36).slice(2);
  return `${prefix}${uniquePart}`;
};
