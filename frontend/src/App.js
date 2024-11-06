import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Formfill from './Componenets/Formfill.tsx';
import Home from './Componenets/Home';
import Success from './Componenets/Success';
import './App.css';

function AppContent() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formfill />} />
        <Route path="/success" element={<Success />} />
      </Routes>
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
