import { useRef } from 'react';

const SignUp = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      }),
    });
    e.target.reset();
    if (response.status === 200) {
      const json = await response.json();
      console.log(json.message);
    }
  };

  return (
    <div className="form__container">
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
    </div>
  );
};

export default SignUp;
