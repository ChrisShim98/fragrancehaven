import React from 'react';
import './App.css';
import CarouselComp from './components/carouselComp';
import Footer from './components/footer';
import Navbar from './components/navbar';
import TopFragrance from './components/topFragrance';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <CarouselComp />
      <TopFragrance />
      <Footer />
    </div>
  );
}

export default App;
