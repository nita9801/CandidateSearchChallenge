import React, { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import { getCandidate } from '../api/API';
const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [savedCandidates, setSavedCandidates] = useState<any[]>(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    fetchCandidate();
  }, []);
  const fetchCandidate = async () => {
    const data = await getCandidate();
    setCandidate(data);
  };
  const handleSave = () => {
    setSavedCandidates([...savedCandidates, candidate]);
    localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
    fetchCandidate();
  };
  const handleReject = () => {
    fetchCandidate();
  };
  return (
    <div>
      {candidate ? (
        <CandidateCard candidate={candidate} onSave={handleSave} onReject={handleReject} />
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};
export default CandidateSearch;
