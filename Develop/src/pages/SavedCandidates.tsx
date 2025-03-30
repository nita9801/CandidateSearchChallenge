import React from 'react';
import CandidateCard from '../components/CandidateCard';

const SavedCandidates: React.FC = () => {
  const [error] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [savedCandidates, setSavedCandidates] = React.useState<
    { name: string; email: string; login: string; avatar_url: string; html_url: string }[]
  >([]);

  React.useEffect(() => {
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      setSavedCandidates(JSON.parse(savedData));
    }
  }, []);

  const filteredCandidates = React.useMemo(
    () =>
      savedCandidates.filter((candidate) =>
        searchQuery === '' || candidate.name?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [savedCandidates, searchQuery]
  );

  const handleReject = (candidate: any) => {
    console.log('Reject candidate:', candidate);
    setSavedCandidates((prev) => prev.filter((c) => c.email !== candidate.email));
    localStorage.setItem(
      'savedCandidates',
      JSON.stringify(savedCandidates.filter((c) => c.email !== candidate.email))
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search candidates"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
     
      {error ? (
        <p>Error: {error}</p>
      ) : filteredCandidates.length > 0 ? (
        filteredCandidates.map((candidate) => (
          <CandidateCard
            key={candidate.email}
            candidate={candidate}
            onSave={() => console.log('Save candidate:', candidate)}
            onReject={() => handleReject(candidate)}
          />
        ))
      ) : (
        <p>No candidates found.</p>
      )}
    </div>
  );
};

export default SavedCandidates;