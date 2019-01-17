import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodoComplete, deleteTodo } from '../../store/actions/TodoActions'

class TodoItem extends React.Component {

  calculateStyle = () => {
    const { completed } = this.props.todo;
    return {
      cursor: 'pointer',
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  onClickHandler = id => this.props.toggleTodoComplete(id);
  onClickDeleteHandler = id => this.props.deleteTodo(id);

  render() {
    const { todo } = this.props;
    return (
      <li className={"list-group-item d-flex justify-content-between align-items-center" + (todo.completed ? ' list-group-item-success' : '')}>
        <span 
          style={this.calculateStyle()} 
          onClick={this.onClickHandler.bind(this, todo.id)}
          >
          {todo.title}
        </span>
        <span 
          className="badge badge-danger badge-pill"
          style={{cursor: 'pointer'}}
          onClick={this.onClickDeleteHandler.bind(this, todo.id)}
          >
          delete
        </span>
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default connect(null, { toggleTodoComplete, deleteTodo })(TodoItem);