import axios from 'axios';
import { FETCH_TODOS, NEW_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

export const fetchTodos = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => dispatch({
      type: FETCH_TODOS,
      payload: res.data
    }));
};

export const toggleTodoComplete = id => dispatch => {
  dispatch({
    type: TOGGLE_TODO,
    payload: id
  });
};

export const addTodo = title => dispatch => {
  axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => dispatch({
      type: NEW_TODO,
      payload: res.data
    }));
};

export const deleteTodo = id => dispatch => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => dispatch({
      type: DELETE_TODO,
      payload: id
    }));
};
