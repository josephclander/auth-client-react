import ViteImg from '../assets/ViteImg';
import SassImg from '../assets/SassImg';
import ReactImg from '../assets/ReactImg';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome 👋</h1>
      <p className="home__blurb">
        This app demonstrates using authorisation with React, Vite and Sass.
      </p>
      <div className="company-icons">
        <ReactImg />
        <ViteImg />
        <SassImg />
      </div>
    </div>
  );
};

export default Home;
