import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.Component {
  render() {
    return (
      <li>
        <div> {this.props.label} </div>
        <input 
          type="checkbox" 
          name="isDone" 
          defaultChecked={this.props.isDone} 
          onChange={this.props.onChange} 
        />
        <input 
          type="button" 
          name="delete" 
          value="delete"
          onClick={this.props.onDelete} 
        />
      </li>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string,
  isDone: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};

export default TodoListItem;
