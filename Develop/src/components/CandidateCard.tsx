import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

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
        <h2>{candidate.login} ({candidate.name})</h2>
        <p>Location: {candidate.location || 'No location'}</p>
        <p>Email: {candidate.email || 'No Email'}</p>
        <p>Company: {candidate.company || 'No Company'}</p>
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
