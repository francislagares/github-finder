import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from 'components/layout/Alert';
import Footer from 'components/layout/Footer';
import Navbar from 'components/layout/Navbar';
import { AlertProvider } from 'contexts/alert/AlertContext';
import { GithubProvider } from 'contexts/github/GithubContext';
import About from 'pages/About';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

import './styles/index.css';

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
