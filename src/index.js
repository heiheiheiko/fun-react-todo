import '../assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList/TodoList';

ReactDOM.render(
  <TodoList title="My Todo List"/>,
  document.getElementById('app')
);

module.hot.accept();