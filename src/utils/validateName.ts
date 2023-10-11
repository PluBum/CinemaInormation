export const validateName = (name: string, length: number) => {
  if (!name) {
    return "";
  }
  if (length && name.length <= length) {
    return name;
  } else {
    return `${name.slice(0, length - 1)}...`;
  }
};
