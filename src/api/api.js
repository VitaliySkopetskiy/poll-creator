import axios from 'axios';

const API_URL = 'https://6626a09d052332d553238268.mockapi.io/api/polls-vitaly';

export const getPolls = async () => axios.get(API_URL);
export const createPoll = async (poll) => axios.post(API_URL, poll);
export const getPollById = async (id) => axios.get(`${API_URL}/${id}`);
export const deletePoll = async (id) => axios.delete(`${API_URL}/${id}`);