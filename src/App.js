import React from 'react';
import Form from './components/Form'
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Manage My Items</h1>
      </header>
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
