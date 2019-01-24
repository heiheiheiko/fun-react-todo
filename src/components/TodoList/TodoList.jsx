import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem/TodoListItem';
import TodoListAddForm from './TodoListAddForm/TodoListAddForm';

class TodoList extends React.Component {
  onTodoListItemChange(id){
    const listItems = this.state.listItems.map((listItem) => {
      if (listItem.id === id) {
        listItem.isDone = event.target.checked;
        return listItem
      } else {
        return listItem;
      }
    });
    
    this.setState({
      listItems: listItems,
    });
  }

  onTodoListItemDelete(id){
    const listItems = this.state.listItems.filter((listItem) => listItem.id !== id);
    
    this.setState({
      listItems: listItems,
    });
  }

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
              onChange={() => this.onTodoListItemChange(listItem.id)}
              onDelete={() => this.onTodoListItemDelete(listItem.id)}
              key={listItem.id} 
            />
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  title: PropTypes.string,
};

const mapState = state => ({ listItems: state.listItems });
const ConnectedComponent = connect(mapState, null)(TodoList);
export default ConnectedComponent;
