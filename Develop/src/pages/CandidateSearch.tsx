import React, { useState } from 'react';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const savedCandidates = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      location: 'New York, USA',
      avatar_url: 'https://example.com/avatar1.jpg',
      email: 'john.doe@example.com',
      html_url: 'https://example.com/johndoe',
      company: 'Tech Corp',
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      location: 'Los Angeles, USA',
      avatar_url: 'https://example.com/avatar2.jpg',
      email: 'jane.smith@example.com',
      html_url: 'https://example.com/janesmith',
      company: 'Innovate Ltd',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      username: 'alicejohnson',
      location: 'Chicago, USA',
      avatar_url: 'https://example.com/avatar3.jpg',
      email: 'alice.johnson@example.com',
      html_url: 'https://example.com/alicejohnson',
      company: 'Creative Inc',
    },
  ];
const filteredCandidates = savedCandidates.filter((candidate) =>
  candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
  <div>
    <input
      type="text"
      placeholder="Search candidates..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <ul>
  {filteredCandidates.map((candidate) => (
    <CandidateCard key={candidate.id} candidate={candidate} onSave={function (): void {
          throw new Error('Function not implemented.');
      } } onReject={function (): void {
          throw new Error('Function not implemented.');
      } } />
  ))}
</ul>
  </div>
  );
};
export default CandidateSearch;