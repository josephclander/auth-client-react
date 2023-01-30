import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__header">Page Not Found</h1>
      <p className="not-found__message">Sorry that address doesn't exist.</p>
      <ul className="not-found__list">
        <Link className="button" to="/">
          <span className="button__title">Home</span>
        </Link>
        <Link className="button" to="/signup">
          <span className="button__title">Sign Up</span>
        </Link>
        <Link className="button" to="/signin">
          <span className="button__title">Sign In</span>
        </Link>
      </ul>
    </div>
  );
};

export default NotFound;
