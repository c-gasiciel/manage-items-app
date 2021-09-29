import React, { useState, createContext } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import './App.css';

const App = (props) => {
  /* Set up array for list inputs */
  const [ myList, setMyList ] = useState([
    "Clean", 
    "Read", 
    "Finish this project"
  ]);

  const ListContext = createContext();

  return (
    <div className="App">
      <Header pageTitle="Manage my Items" />
      <main>
        <Form />
        <List display={ myList } />
      </main>
    </div>
  );
}

export default App;
 