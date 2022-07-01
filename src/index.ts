const isObject = (x: unknown): boolean => {
  if (!({}.toString.apply(x) === "[object Object]")) {
    return false;
  }

  if (!(x instanceof Object)) {
    return false;
  }

  return true;
};

export default isObject;
