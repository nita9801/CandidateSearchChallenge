import React from 'react';

interface Candidate {
  name?: string;
  username?: string; // Added username property
  login: string;
  location?: string;
  avatar_url: string;
  email?: string;
  html_url: string;
  company?: string;
};

interface CandidateCardProps {
candidate: Candidate;
onSave: () => void;
onReject: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onReject }) => {
  return (
    <div>
      <div className="candidate-card">
        <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
        <h2>{candidate.name}</h2>
        <p>Username: {candidate.username}</p>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
      <button onClick={onSave}>+</button>
      <button onClick={onReject}>-</button>
    </div>

  );
};
export default CandidateCard;
