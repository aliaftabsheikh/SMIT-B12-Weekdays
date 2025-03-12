import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar_container">
        <h2>Logo</h2>

        <ul className="nav_items">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
        </ul>
    </div>
  );
};

export default Navbar;
