import React, { useState } from 'react'
import Header from './components/Header'
import ClickMe from './components/ClickMe'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Header />
      <ClickMe onClick={increment}/>
      <ClickMe onClick={increment}/>
      <ClickMe onClick={increment}/>
      <h2>
        Clicked: {count} times!
      </h2>
    </div>
  );
}

export default App
