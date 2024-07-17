import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FinalPay from './FinalPay';
import BookingDetail from './BookingDetails';
import Home from './Home';
import Navbar from './components/Navbar';
import './transitions.css';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/bookingdetails" element={<BookingDetail />} />
            <Route path="/finalpay" element={<FinalPay />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
