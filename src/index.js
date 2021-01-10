import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store/index'
//被Provider包裹的标签里都可以用store里的值
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);
