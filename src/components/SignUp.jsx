import { useRef } from 'react';

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
    <>
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
    </>
  );
};

export default SignUp;
