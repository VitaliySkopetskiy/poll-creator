import React from 'react';
import classes from './Buttons.module.css';

const Button = ({ onClick, disabled, children = "Submit", variant = "submit" }) => {
  const getClassByVariant = () => {
    switch (variant) {
      case "add":
        return classes.addButton;
      case "remove":
        return classes.removeButton;
      case "submit":
      default:
        return classes.submitButton;
    }
  };

  return (
    <button
      className={`${classes.button} ${getClassByVariant()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
