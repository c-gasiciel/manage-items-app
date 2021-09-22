import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header pageTitle="Manage My Items" />
      <main>
        <Form />
        <List />
      </main>
    </div>
  );
}

export default App;
