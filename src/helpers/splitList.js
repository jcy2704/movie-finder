export default list => {
  const result = [];

  for (let i = 0; i < list.length; i += 3) {
    result.push(list.slice(i, i + 4));
  }

  return result;
};
