import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPolls } from '../../api/api';
import classes from './ViewPolls.module.css';

const ViewPolls = () => {
  const [polls, setPolls] = useState([]);

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

  return (
    <div className={classes.container}>
      <div className={classes.pollsContainer}>
        <div className={classes.pollList}>
          <h2>Polls</h2>
          {polls.map((poll) => (
            <div key={poll.id} className={classes.pollItem}>
              <Link to={`/poll/${poll.id}`}>{poll.question}</Link>
              <span className={classes.pollItemDate}>
                {new Date(poll.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPolls;





