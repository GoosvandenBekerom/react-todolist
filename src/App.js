import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuid from 'uuid';

import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the thrash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Walk the dog',
        completed: true
      },
      {
        id: uuid.v4(),
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

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
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
      <Router>
        <div className="App">
          <div className="container">

            <Header />
            
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={todos} toggle={this.toggle} delete={this.delete} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
