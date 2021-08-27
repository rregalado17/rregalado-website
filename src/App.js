import './App.css';
import React from 'react';
import Intro from './Intro.js'
import Header from './Header.js'
import Projects from './Projects.js'
import { GITHUB } from "./Data.js"
console.log({GITHUB})


function App() {

  const githubLink = GITHUB.map(link => {
    console.log(link)
  })

  return (
    <div>
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
