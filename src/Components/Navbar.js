import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>HHK</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#3567f1',
          borderRadius: '8px' 
        }}>Nytt Inlägg</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;