import '../assets/styles/main.scss';

import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import TodoList from './components/TodoList/TodoList';

render(
  <Provider store={store}>
    <TodoList title="My Todo List"/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();