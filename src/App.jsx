// import logo from './logo.svg';
import React from 'react';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className="title">Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
