import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'

function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 antialiased">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App
