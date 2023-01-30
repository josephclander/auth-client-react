import { Link } from 'react-router-dom';

const Navbar = () => {
  // hardcoded id 1
  const userId = 1;
  return (
    <nav className="navbar">
      <ul className="navlist">
        <Link className="button" to="/">
          <span className="button__title">Home</span>
        </Link>
        <Link className="button" to="/signup">
          <span className="button__title">Sign Up</span>
        </Link>
        <Link className="button" to="/signin">
          <span className="button__title">Sign In</span>
        </Link>
        <Link className="button" to={`/account/${userId}`}>
          <span className="button__title">Account</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
