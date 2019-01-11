import React from 'react';

const formStyle = {
    display: 'flex',
    margin: '10px 0'
}

const AddTodo = () => (
    <form style={formStyle}>
        <input
            type="text"
            name="title"
            placeholder="Add new todo..."
            style={{ flex: 10 }}
        />
        <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            style={{ flex: 1 }}
        />
    </form>
)

export default AddTodo;