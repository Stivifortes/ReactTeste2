export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addTodo = (id, task) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: id,
      task: task,
      completed: false,
    },
  };
};

export const toggleTodo = (todo) => {
  return {
    type: "TOGGLE_TODO",
    payload: todo,
  };
};
