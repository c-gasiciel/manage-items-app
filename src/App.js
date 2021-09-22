import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Header pageTitle="Manage My Items" />
      <main>
        <Form />
        <section>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
