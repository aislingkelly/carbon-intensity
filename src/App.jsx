import './App.css';
import Activities from './components/Activities';
import Footer from './components/Footer';
import Home from './components/Home';
import National from './components/National';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/national" element={<National />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
