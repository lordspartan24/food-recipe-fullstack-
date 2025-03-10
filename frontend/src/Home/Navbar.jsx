import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    setIsAuthenticated(false); // Update state
    navigate('/login'); // Redirect to login
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" 
      style={{position:"sticky", top: "0", zIndex: "100"}}
      >
        <div className="container-fluid">
          
          {/* Logo and Brand Name */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img 
              src="/log.jpg" 
              alt="Logo" 
              width="40" 
              height="40" 
              className="d-inline-block align-top me-2"
            />
            Recipe <br/> Corner
          </a>

          {/* Navbar Toggler for Mobile View */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
            <li className="nav-item active">

                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item active">
              <Link to="/my-recipes" className="nav-link">Your Recipe</Link>
              </li>

              <li className="nav-item">
              <Link to="/favorite" className="nav-link">Favourites</Link>
              </li>
              
            </ul>
            {/* Authentication Buttons */}
            <div className="d-flex">
              {isAuthenticated ? (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-primary">Login</Link>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};
