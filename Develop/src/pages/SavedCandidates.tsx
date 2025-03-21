import React from 'react';
import CandidateCard from '../components/CandidateCard';
const SavedCandidates: React.FC = () => {
  const [loading] = React.useState(false);
  const [error] = React.useState<string | null>(null);
  const [candidate] = React.useState<any>(null);
  const savedCandidates: { name: string; email: string }[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');

  const handleSave = (candidate: any) => {
    console.log('Save candidate:', candidate);
  };

  const handleReject = (candidate: any) => {
    console.log('Reject candidate:', candidate);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : candidate ? (
        <CandidateCard candidate={candidate} onSave={() => handleSave(candidate)} onReject={() => handleReject(candidate)} />
      ) : (
        <>
          <p>No more candidates available</p>
          {savedCandidates.length > 0 ? (
            <ul>
              {savedCandidates.map((savedCandidate: { name: string; email: string }, index: number) => (
                <li key={index}>
                  {savedCandidate.name} - {savedCandidate.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>No candidates have been saved</p>
          )}
        </>
      )}
    </div>
  );
};

export default SavedCandidates;