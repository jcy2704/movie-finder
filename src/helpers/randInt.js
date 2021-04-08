export default (minim, maxim) => {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
