// Action Type
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [],
};

// Reducer
const todos = (state = initialState, action) => {
  console.log("payload ==> ", action.payload);
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };

    case UPDATE_TODO:
      const newTodos = [...state.todos];
      newTodos.forEach((todo, index) => {
        if (todo.id === action.payload) {
          state.todos[index].isDone = !state.todos[index].isDone;
        }
      });

      return {
        todos: newTodos,
      };

    default:
      return state;
  }
};

export default todos;
