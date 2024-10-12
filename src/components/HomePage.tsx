import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { fetchUser } from '../service/api';

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!userId) {
      setError('Please enter a user ID');
      return;
    }

    try {
      await fetchUser(parseInt(userId, 10));
      navigate(`/user/${userId}`);
    } catch (err) {
      setError('User not found. Please try a different ID.');
    }
  };

  const handleCreateNew = () => {
    navigate('/user/new');
  };

  return (
    <div className="">
      <div className="p-mb-3">
        <InputText
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          className="p-mr-2"
        />
        <Button
          label="Search User"
          onClick={handleSearch}
          className="p-mr-2 search-btn"
        />
        <Button
          label="Create New User"
          className="create-page-btn"
          onClick={handleCreateNew}
        />
      </div>
      {error && <div className="p-error mt-4">{error}</div>}
    </div>
  );
};

export default HomePage;
