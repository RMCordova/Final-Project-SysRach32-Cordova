import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mainmenu.component.css';

function MainMenu() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {

    const data = [
      { id: 1, title: 'Job 1', company: 'Company A' },
      { id: 2, title: 'Job 2', company: 'Company B' },
      { id: 3, title: 'Job 3', company: 'Company C' },
    ];
    setJobs(data);
  };

  return (
    <div>
      <h1>Job Hunt</h1>
      <div>
        <input
          type="text"
          placeholder="Search for jobs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainMenu;
