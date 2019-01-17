import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import TodoItem from './TodoItem';
import { fetchTodos } from '../../store/actions/TodoActions';

class Todos extends React.Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          ))
        }
      </ul>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return ({
    todos: state.todos.items
  })
}

export default connect(mapStateToProps, { fetchTodos })(Todos);