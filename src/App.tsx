import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
// @ts-ignore
import { Blog } from './pages/Blog';
// @ts-ignore
import { BlogPost } from './pages/BlogPost';
// @ts-ignore
import { Clients } from './pages/Clients';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" dir="rtl">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;