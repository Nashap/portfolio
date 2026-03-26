import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}
