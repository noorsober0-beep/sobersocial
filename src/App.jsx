import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Cafes from './pages/Cafes';
import About from './pages/About';
import Join from './pages/Join';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream text-espresso">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
