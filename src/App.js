import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the thrash',
        completed: false
      },
      {
        id: 2,
        title: 'Walk the dog',
        completed: true
      },
      {
        id: 3,
        title: 'Visit grandma',
        completed: false
      },
    ]
  }

  // Toggle todo complete
  toggle = id => {
    this.setState({ todos:
      this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete todo
  delete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={todos} toggle={this.toggle} delete={this.delete} />
        </div>
      </div>
    );
  }
}

export default App;
