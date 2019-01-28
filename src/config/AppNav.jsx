import React from "react";
import TodoList from "../components/TodoList/TodoList";
import AboutPage from "../components/pages/AboutPage";

const appNavItems = [
  {
    id: "todo",
    title: "Todo List",
    path: "/todo",
    component: () => (<TodoList title="My Todo List"> </TodoList>)
  },
  {
    id: "about-page",
    path: "/page/about",
    title: "About",
    component: AboutPage
  }
];

export default appNavItems;