import React from 'react';
import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element ={<Layout />}>
        <Route index element ={<Home />} />
        <Route path= "/about" element ={<About />} />
        <Route path= "/projects" element ={<Projects />} />
        <Route path= "/workexperience" element ={<Experience />} />
        </Route>
    </Routes>
    </>
  )
   
}

export default App;
