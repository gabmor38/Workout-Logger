const NavBar = () => {
  return (
    <nav className="navbar flex items-center justify-between p-4 bg-gray-800 text-white rounded-md">        
      <div className="nav-container">
        <ul className="nav-menu flex space-x-8">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Workouts</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Journal</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;