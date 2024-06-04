import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-start">
      <NavLink to="/" className="mr-4">
        Home
      </NavLink>
      <NavLink to="/square" className="mr-4">
        Quadrado
      </NavLink>
      <NavLink to="/circle" className="mr-4">
        Círculo
      </NavLink>
      <NavLink to="/cone" className="mr-4">
        Cone
      </NavLink>
      <NavLink to="/hexagon" className="mr-4">
        Hexágono
      </NavLink>
    </nav>
  )
}

export default Navigation;