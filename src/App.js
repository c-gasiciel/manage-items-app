import React, { useState, createContext, useReducer } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import './App.css';


export const ListContext = createContext();
/* Set initial state of myList */
const initialState = [];

/* Reducer to manage additions and removals to items list */
const reducer  = (state, action) => {
  switch(action.type){
    case 'addItem':
      return[
        ...state,
        { 
          itemId: action.payload.itemId,
          itemText: action.payload.itemText
        }
      ];
      case 'removeItem':
        return[

        ];
      default:
        return state;
  }
};


const App = (props) => {
  /* Set up array for list inputs 
  const [ myList, setMyList ] = useState([
    "Clean", 
    "Read", 
    "Finish this project"
  ]); */

  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <ListContext.Provider value={{
      state,
      dispatch
    }}>
      <Header pageTitle="Manage my Items" />
      <main>
        <Form />
        <List />
      </main>
    </ListContext.Provider>
  );
}

export default App;
 