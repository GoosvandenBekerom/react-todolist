import React from 'react';
import { PropTypes } from 'prop-types';

class AddTodo extends React.Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">

          <input 
            type="text"
            name="title"
            className="form-control"
            placeholder="Add new todo..."
            value={this.state.title}
            onChange={this.onChange}
            />

          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
          </div>

        </div>
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;