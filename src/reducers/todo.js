const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          completed: false,
        },
      ];
      break;
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
      break;
  }
};

export default todoReducer;
