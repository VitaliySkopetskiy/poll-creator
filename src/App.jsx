import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CreatePoll from './pages/CreatePoll/CreatePoll';
import ViewPolls from './pages/ViewPolls/ViewPolls';
import ViewPollDetails from './pages/ViewPollDetails/ViewPollDetails';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ViewPolls />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="/poll/:id" element={<ViewPollDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
