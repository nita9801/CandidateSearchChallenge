import React from 'react';
interface CandidateCardProps {
  candidate: {
    name: string;
    username: string;
    location: string;
    avatar_url: string;
    email: string;
    html_url: string;
    company: string;
  };
  onSave: () => void;
  onReject: () => void;
}
const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onReject }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.avatar_url} alt={candidate.name} />
      <h3>{candidate.name}</h3>
      <p>Username: {candidate.username}</p>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      <button onClick={onSave}>+</button>
      <button onClick={onReject}>-</button>
    </div>
  );
};
export default CandidateCard;
