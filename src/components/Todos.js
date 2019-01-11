import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

    render() {
        const { todos } = this.props;
        return (
            <ul className="list-group">
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo} toggle={this.props.toggle}></TodoItem>)
                }
            </ul>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;