import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Ourstore from './pages/Ourstore';
import Blog from './pages/Blog';
import Phone from './components/Phone';
import Watch from './components/Watch';
import Laptop from './components/Laptop';
import Headphone from './components/Headphone';
import Tablet from './components/Tablet';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='store' element={<Ourstore />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blogs' element={<Blog/>} />
            <Route path='phones' element={<Phone/>} />
            <Route path='watches' element={<Watch/>} />
            <Route path='laptops' element={<Laptop/>} />
            <Route path='tablets' element={<Tablet/>} />
            <Route path='headphones' element={<Headphone/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
