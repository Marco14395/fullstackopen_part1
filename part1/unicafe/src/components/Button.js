import React from 'react';
import "./Button.css";

const Button = ({onClick, text, className}) => {
  return (
    <button onClick={onClick} className={className} id="btn">{text}</button>
)}

export default Button