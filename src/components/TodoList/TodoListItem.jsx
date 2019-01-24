import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { removeListItem, updateListItem } from "../../redux/actions";

class TodoListItem extends React.Component {

  onChange(){
    this.props.updateListItem({
      id: this.props.id,
      label: this.props.label,
      isDone: !this.props.isDone,
    });
  }

  onDelete() {
    event.preventDefault();
    this.props.removeListItem(this.props.id);
  }

  render() {
    return (
      <li>
        <div> {this.props.label} </div>
        <input 
          type="checkbox" 
          name="isDone" 
          defaultChecked={this.props.isDone} 
          onChange={() => this.onChange()} 
        />
        <input 
          type="button" 
          name="delete" 
          value="delete"
          onClick={() => this.onDelete()} 
        />
      </li>
    );
  }
}

TodoListItem.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  isDone: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  removeListItem: PropTypes.func,
  updateListItem: PropTypes.func
};

const mapDispatch = dispatch => ({
  removeListItem: listItem => dispatch(removeListItem(listItem)) ,
  updateListItem: listItem => dispatch(updateListItem(listItem))
});
const ConnectedComponent = connect(null, mapDispatch)(TodoListItem);
export default ConnectedComponent;
