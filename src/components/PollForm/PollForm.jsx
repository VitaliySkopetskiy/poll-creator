
import React, { useState } from 'react';
import Button from '../Buttons/Button';
import AddButton from '../Buttons/AddButton';
import classes from './PollForm.module.css';

const PollForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const [error, setError] = useState({});

  const handleAddOption = () => {
    if (options[options.length - 1].trim() !== '') {
      setOptions([...options, '']);
    }
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredOptions = options.filter((option) => option.trim() !== '');
    if (!question.trim()) {
      setError({ question: 'Poll question is required.' });
      return;
    }
    if (filteredOptions.length < 2) {
      setError({ options: 'At least two options are required.' });
      return;
    }
    setError({});
    onSubmit({ question, options: filteredOptions });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formWrapper}>
      <h2 className={classes.formTitle}>Create Your Poll</h2>
      
      <label className={classes.formLabel}>Poll Question</label>
      <div className={classes.inputContainer}>
        <input
          type="text"
          className={classes.formInput}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter poll question"
        />
      </div>
      {error.question && <p className={classes.errorText}>{error.question}</p>}

      <label className={classes.formLabel}>Poll Options</label>
      <div className={classes.inputContainer}>
        <input
          type="text"
          className={classes.formInput}
          value={options[options.length - 1]}
          onChange={(e) =>
            setOptions(
              options.map((opt, index) =>
                index === options.length - 1 ? e.target.value : opt
              )
            )
          }
          placeholder="Add new option"
        />
        <AddButton onClick={handleAddOption} />
      </div>
      {error.options && <p className={classes.errorText}>{error.options}</p>}

      <ul className={classes.optionList}>
        {options
          .slice(0, -1) // Exclude the current empty input
          .map((option, index) => (
            <li key={index} className={classes.optionItem}>
              <span className={classes.optionText}>{option}</span>
              <Button
                variant="remove"
                onClick={() => handleRemoveOption(index)}
              >
                Remove
              </Button>
            </li>
          ))}
      </ul>
        <div className={classes.buttonContainer}>
      <Button disabled={!question.trim() || options.length < 2}>
        Submit
      </Button>
      </div>
    </form>
  );
};

export default PollForm;
