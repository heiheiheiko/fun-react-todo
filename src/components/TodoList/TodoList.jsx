import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import TodoListAddForm from './TodoListAddForm';

class TodoList extends React.Component {
  render() {
    const listItems = this.props.listItems

    return (
       <div>
        <h2 className="title is-2">{this.props.title}</h2>
        <TodoListAddForm />

        <ul>
          {listItems.map((listItem) =>
            <TodoListItem 
              label={listItem.label} 
              isDone={listItem.isDone} 
              key={listItem.id}
              id={listItem.id} 
            />
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  title: PropTypes.string,
  listItems: PropTypes.array,
};

const mapState = state => ({ listItems: state.listItems });
const ConnectedComponent = connect(mapState, null)(TodoList);
export default ConnectedComponent;
