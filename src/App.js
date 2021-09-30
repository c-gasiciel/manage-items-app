import React, { createContext, useReducer } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import './App.css';


export const ListContext = createContext();
/* Set initial state of items list */
const initialState = [];

/* Manage additions to and removals from items list with reducer */
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
        return state.filter((item) => item.itemId !== action.payload);
      default:
        return state;
  }
};


const App = (props) => {

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
 