import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem/TodoListItem';
import TodoListAddForm from './TodoListAddForm/TodoListAddForm';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      listItems: [
        {
          id: 1,
          label: "Waschen",
          isDone: true
        },
        {
          id: 2,
          label: "Aufräumen",
          isDone: false
        },
      ],
      addLabelFieldValue: "",
      nextListItemId: 3
    };
  }

  onTodoListAddFormChange() {
    this.setState({addLabelFieldValue: event.target.value});
  }

  onTodoListAddFormSubmit() {
    event.preventDefault();

    const newListItem = {
      id: this.state.nextListItemId,
      label: this.state.addLabelFieldValue,
      isDone: false,
    }
    const listItems = [...this.state.listItems, newListItem];

    this.setState(
      {
        listItems: listItems,
        nextListItemId: this.state.nextListItemId + 1
      }
    );
  }

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
    const listItems = this.state.listItems

    return (
       <div>
        <h2 className="title is-2">{this.props.title}</h2>
        <TodoListAddForm 
          value={this.state.addLabelFieldValue} 
          onSubmit={() => this.onTodoListAddFormSubmit()}
          onChange={() => this.onTodoListAddFormChange()}
        />

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

export default TodoList;
