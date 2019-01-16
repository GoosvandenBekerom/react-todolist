import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

  calculateStyle = () => {
    const { completed } = this.props.todo;
    return {
      cursor: 'pointer',
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={"list-group-item d-flex justify-content-between align-items-center" + (todo.completed ? ' list-group-item-success' : '')}>
        <span style={this.calculateStyle()} onClick={this.props.toggle.bind(this, todo.id)}>{todo.title}</span>
        <span className="badge badge-danger badge-pill" style={{cursor: 'pointer'}} onClick={this.props.delete.bind(this, todo.id)}>remove</span>
      </li>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
}

export default TodoItem;