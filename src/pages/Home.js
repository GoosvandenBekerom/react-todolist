import React from 'react'
import AddTodo from '../components/Todo/AddTodo';
import Todos from '../components/Todo/Todos';

const Home = () => (
  <React.Fragment>
    <AddTodo />
    <Todos />
  </React.Fragment>
)

export default Home;
