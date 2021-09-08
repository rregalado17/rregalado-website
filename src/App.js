import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Intro from './Intro.js'
import Header from './Header.js'
import Projects from './Projects.js'
import Body from './Body.js'
import { PROJECTS } from "./Data.js"



function App() {

  return (
    <div>
      <Header />
      <Intro />
      <Body />
      <Projects myProjects={PROJECTS} />

    </div>
  );
}

export default App;
