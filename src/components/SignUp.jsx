import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: inputEmail.current?.value,
      password: inputPassword.current?.value,
    };
    e.target.reset();
    console.log({ data });
  };

  return (
    <div className='form__container'>
      <form id="form-signup" className="form" onSubmit={handleSubmit}>
        <h1 className="form-header">Sign Up</h1>
        <label name="email">
          {' '}
          Email:
          <input className="form__email" type="email" ref={inputEmail} />
        </label>
        <label name="password">
          {' '}
          Password:
          <input
            className="form__password"
            type="password"
            ref={inputPassword}
          />
        </label>
        <button
          onSubmit={handleSubmit}
          type="submit"
          form="form-signup"
          value="submit"
          className="button"
        >
          <span className="button__title">Submit</span>
        </button>
      </form>
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

export default SignUp;
