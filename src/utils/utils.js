export const getBestMatch = (list, query) => {
  if (list.length < 1) return null;

  const bestMatch = list.find(
    (item) => item.toLowerCase() === query.toLowerCase(),
  );

  return bestMatch || list[0];
};

export const capitalize = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
