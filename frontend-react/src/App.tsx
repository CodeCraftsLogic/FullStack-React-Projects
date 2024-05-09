import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
        <div className='app'>
          <Navbar/>
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </div>
    // <BrowserRouter>
    //   <Route>
    //   </Route>
    // </BrowserRouter>
  );
}

export default App;
