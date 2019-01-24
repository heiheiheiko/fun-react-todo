import React from 'react';
import PropTypes from 'prop-types';

class TodoListAddForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input type="text" name="label" value={this.props.value} onChange={this.props.onChange} />
        <input type="submit" value="add" />
      </form>
    );

  }
}

TodoListAddForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default TodoListAddForm;
