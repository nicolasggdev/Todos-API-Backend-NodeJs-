const filterObj = (Objt, ...content) => {
  const newTodo = {};
  Object.keys(Objt).forEach((property) => {
    if (content.includes(property)) {
      newTodo[property] = Objt[property];
    }
  });
  return newTodo;
};

module.exports = { filterObj };
