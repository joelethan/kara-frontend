export default (myArray, id) => {
  return myArray.filter((obj) => {
    return obj.id !== id;
  });
};
