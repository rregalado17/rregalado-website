import './App.css';
import React from 'react';
import Intro from './Intro.js'
import Header from './Header.js'
import Projects from './Projects.js'
import Body from './Body.js'
import { GITHUB, VIDEOS } from "./Data.js"



function App() {

  return (
    <div>
      <Header />
      <Intro />
      <Body />
      <Projects github={GITHUB} videos={VIDEOS}/>

    </div>
  );
}

export default App;
