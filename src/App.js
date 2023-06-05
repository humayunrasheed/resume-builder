import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Body from './components/Body/Body';
import { ArrowDown } from 'react-feather';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
