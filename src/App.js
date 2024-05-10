import logo from './logo.svg';
import './App.css';
import './css/new.css'
import FirstLandingText from "../src/components/firstlandingtext"
import SecondLandingText from "../src/components/secondlandingtext"
import React, {useState, useEffect} from 'react';
import CustomButton from './components/button';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Home from './components/home';
import About from './components/about';
import News from './components/news';
import Contact from './components/contact';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  // const [page, setPage] = useState("home")
  // const [data, setData] = useState(0)
  // const [display, setDisplay] = useState("Nothing to Display")

  // const [data, setDate] = useState(0)

  // useEffect(() => {

  //   setDisplay(`DISPLAY ${data}`)

  // },[data])

 
  return (
    <Router>
    <div>
      <ul>
        <li><a class="active" href="home">Home</a></li>
        <li><a href="news">News</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="about">About</a></li>
      </ul>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/test" element={<FirstLandingText/>}></Route>
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
