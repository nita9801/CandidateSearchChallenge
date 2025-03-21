import React from 'react';
const SavedCandidates: React.FC = () => {
  const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
  return (
    <div>
      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate: any, index: number) => (
          <div key={index} className="candidate-card">
            <img src={candidate.avatar_url} alt={candidate.name} />
            <h3>{candidate.name}</h3>
            <p>Username: {candidate.username}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        ))
      ) : (
        <p>No candidates have been saved</p>
      )}
    </div>
  );
};
export default SavedCandidates;
