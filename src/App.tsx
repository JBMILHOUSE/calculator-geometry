import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Square from './pages/Square';
import Circle from './pages/Circle';
import Cone from './pages/Cone';
import Hexagon from './pages/Hexagon';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/square" element={<Square />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/cone" element={<Cone />} />
        <Route path="/hexagon" element={<Hexagon />} />
      </Routes>
    </Router>
  );
}

export default App;
