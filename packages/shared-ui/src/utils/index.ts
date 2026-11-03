/**
 * Trunca o nome da mulher se for muito longo para não quebrar o layout do Card
 */
export const formatClientName = (name: string, maxLength: number = 25): string => {
  if (name.length <= maxLength) return name;
  return `${name.substring(0, maxLength)}...`;
};