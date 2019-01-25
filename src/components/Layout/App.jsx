import React from 'react';
import TodoList from '../TodoList/TodoList'
import AppNotification from './AppNotification'

function App(){
  return (
    <div>
      <AppNotification/>
      <TodoList title="My Todo List"/>
    </div>
  );
}

export default App;
