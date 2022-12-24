import React from 'react';

const Form = () => {
  return (
    <form className='form' action='#'>
      <label name='email'>
        {' '}
        Email:
        <input className='form__email' type='email' />
      </label>
      <label name='password'>
        {' '}
        Password:
        <input className='form__password' type='password' />
      </label>
      <input className='form__submit' type='submit' value='Submit' />
    </form>
  );
};

export default Form;
