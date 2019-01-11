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
            <li
                className={"list-group-item" + (todo.completed ? ' list-group-item-success' : '')}
                onClick={this.props.toggle.bind(this, todo.id)}
                style={this.calculateStyle()}
                >
                {todo.title}
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;