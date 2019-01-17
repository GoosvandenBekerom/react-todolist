import { FETCH_TODOS, NEW_TODO, TOGGLE_TODO, DELETE_TODO } from './../actions/types';

const initialState = {
  items: []
}

const todosReducer = (state = initialState, action) => {
  console.log('reducer', action)

  switch(action.type) {

    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload
      }
    
    case NEW_TODO:
      state.items.unshift(action.payload)
      return {
        ...state,
        items: [...state.items]
      }

    case TOGGLE_TODO:
      return {
        ...state,
        items: [
          ...state.items.filter(todo => {
            if (todo.id === action.payload) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        ]
      }

    case DELETE_TODO:
      return {
        ...state,
        items: [...state.items.filter(todo => todo.id !== action.payload)]
      }

    default:
      return state;
  }
  
}

export default todosReducer;
