import { useRef } from 'react';

const Form = () => {
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
    <form className='form' onSubmit={handleSubmit}>
      <label name='email'>
        {' '}
        Email:
        <input className='form__email' type='email' ref={inputEmail} />
      </label>
      <label name='password'>
        {' '}
        Password:
        <input className='form__password' type='password' ref={inputPassword} />
      </label>
      <input
        className='form__submit'
        type='submit'
        value='Submit'
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default Form;
