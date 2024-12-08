
import React, { useState, useEffect } from 'react';
import { getPolls, getPollById, deletePoll } from '../../api/api';
import Button from '../../components/Buttons/Button';
import classes from './ViewPollDetails.module.css';

const ViewPollDetails = () => {
  const [polls, setPolls] = useState([]);
  const [selectedPoll, setSelectedPoll] = useState(null);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await getPolls();
        setPolls(response.data);
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };

    fetchPolls();
  }, []);

  const handlePollSelect = async (id) => {
    try {
      const response = await getPollById(id);
      setSelectedPoll(response.data);
    } catch (error) {
      console.error('Error fetching poll details:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedPoll) return;
    try {
      await deletePoll(selectedPoll.id);
      setPolls((prev) => prev.filter((poll) => poll.id !== selectedPoll.id));
      setSelectedPoll(null);
    } catch (error) {
      console.error('Error deleting poll:', error);
    }
  };

  return (
    <div className={classes.container}>
      {/* Poll List */}
      <div className={classes.pollListContainer}>
        {polls.map((poll) => (
          <div
            key={poll.id}
            className={classes.pollItem}
            onClick={() => handlePollSelect(poll.id)}
          >
            <span className={classes.pollItemTitle}>{poll.question}</span>
            <span className={classes.pollItemDate}>
              {new Date(poll.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>

      {/* Poll Details */}
      <div className={classes.detailsContainer}>
        {selectedPoll ? (
          <div className={classes.detailsBox}>
            <h2 className={classes.detailsTitle}>{selectedPoll.question}</h2>
            <p className={classes.detailsOptionsLabel}>Options:</p>
            <div className={classes.detailsOptions}>
              {selectedPoll.options.map((option, index) => (
                <p key={index} className={classes.detailsOption}>
                  {option}
                </p>
              ))}
            </div>
            <div className={classes.buttonContainer}>
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        ) : (
          <p>Select a poll to view details.</p>
        )}
      </div>
    </div>
  );
};

export default ViewPollDetails;



