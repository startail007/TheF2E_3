export const loadComponents = (importList, progress) => {
  let count = 0;
  const len = importList.length;
  const list = importList.map((el) => {
    return el.src.then((res) => {
      count++;
      progress(count, len);
      return Promise.resolve(res);
    });
  });
  return Promise.all(list).then((res) => {
    return res.map((el, index) => {
      return { ...importList[index], component: el.default };
    });
  });
};
