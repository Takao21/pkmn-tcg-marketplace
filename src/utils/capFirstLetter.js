export const capFirstLetter = (str) => {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
};
