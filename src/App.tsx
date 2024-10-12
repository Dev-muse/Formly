import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserForm from './components/UserForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>User Management System</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:userId" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
