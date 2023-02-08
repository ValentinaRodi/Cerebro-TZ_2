import { useState, KeyboardEvent } from "react";

const Input = () => {

  const [userValue, setUserValue] = useState('');

  const handleChange = (event: KeyboardEvent<HTMLInputElement>) => {
    const userChangeValue = (event.target as HTMLTextAreaElement).value;
    const regexp = /0|([1-9]\d*)\[,]\d+/;

    (regexp.test(userChangeValue) === true) ? setUserValue(userChangeValue) : event.preventDefault();
  };
  

  return (
  <div>
    <label htmlFor='input'>{userValue}</label>
    <input 
    type='number'
    id='input'
    onKeyDown={handleChange}
    required
     />
  </div>)
};

export default Input;