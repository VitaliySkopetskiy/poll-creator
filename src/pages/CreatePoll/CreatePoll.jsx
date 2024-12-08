import React from 'react';
import PollForm from '../../components/PollForm/PollForm';
import { createPoll } from '../../api/api';
import classes from './CreatePoll.module.css';

const CreatePoll = () => {
  const handleSubmit = async (poll) => {
    try {
      await createPoll(poll);
      // TODO: add a message to the user
    } catch (error) {
      console.error('Error creating poll:', error);
      // TODO: add a message to the user
    }
  };

  return (
    <div className={classes.formContainer}>
      <PollForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePoll;
