import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addListItem } from "../../redux/actions";

class TodoListAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelFieldValue: "",
      nextListItemId: 3
    };
  }

  onChange(){
    this.setState({labelFieldValue: event.target.value});
  }

  onSubmit(){
    event.preventDefault();
    const labelFieldValue = this.state.labelFieldValue;
    const id = this.state.nextListItemId;
    
    this.props.addListItem({ 
      id: id,
      label: labelFieldValue, 
      idDone: false 
    });
    this.setState({ 
      title: "",
      nextListItemId: id + 1,
    });
  }

  render() {
    return (
      <form onSubmit={() => this.onSubmit()}>
        <input type="text" name="label" value={this.state.labelFieldValue} onChange={() => this.onChange()} />
        <input type="submit" value="add" />
      </form>
    );
  }
}

TodoListAddForm.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  addListItem: PropTypes.func,
};

const mapDispatch = dispatch => ({
   addListItem: listItem => dispatch(addListItem(listItem)) 
});
const ConnectedComponent = connect(null, mapDispatch)(TodoListAddForm);
export default ConnectedComponent;
