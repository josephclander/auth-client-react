import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome 👋</h1>
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
      </ul>
    </div>
  );
};

export default Home;
