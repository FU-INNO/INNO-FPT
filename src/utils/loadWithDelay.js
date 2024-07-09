const loadWithDelay = (importFunc) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importFunc());
    }, 2000);
  });
};

export default loadWithDelay;
