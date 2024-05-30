// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Square from './pages/Square';
import Circle from './pages/Circle';
import Cone from './pages/Cone';
import Hexagon from './pages/Hexagon';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/square" className="mr-4">
          Quadrado
        </Link>
        <Link to="/circle" className="mr-4">
          Círculo
        </Link>
        <Link to="/cone" className="mr-4">
          Cone
        </Link>
        <Link to="/hexagon" className="mr-4">
          Hexágono
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/square" element={<Square />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/cone" element={<Cone /> }/>
        <Route path="/hexagon" element={<Hexagon />} />
      </Routes>
    </Router>
  );
}

export default App;
