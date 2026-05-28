import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Reviews from './pages/Reviews';
import Footer from './pages/Footer';
import './index.css'

function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 antialiased">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Team />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App
