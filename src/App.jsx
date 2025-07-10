import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro'; // Kichik harf emas, katta harfda chaqirilishi kerak

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Blog from './pages/Blog';

const App = () => {
  return (
    <>
       {/* Router tashqarisida */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
