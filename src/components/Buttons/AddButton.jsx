import React from 'react';
import classes from './Buttons.module.css';

const AddButton = ({ onClick }) => {
  return (
    <button
      className={`${classes.button} ${classes.addButton}`}
      onClick={onClick}
      type="button"
      aria-label="Add Option"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="white" />
      </svg>
    </button>
  );
};

export default AddButton;
