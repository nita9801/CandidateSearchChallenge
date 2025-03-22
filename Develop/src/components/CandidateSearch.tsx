import React, { useState } from 'react';
import CandidateCard from './CandidateCard';

const CandidateSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const savedCandidates = [
    {
      id: 1,
      name: 'Chewbaca James',
      username: 'jChewie',
      login: 'jChewie',
      location: 'New York, USA',
      avatar_url: 'https://example.com/avatar1.jpg',
      email: 'jChewie@example.com',
      html_url: 'https://example.com/Chewie',
      company: 'Space Inc',
    },
    {
      id: 2,
      username: 'jFoster',
      login: 'jFoster',
      location: 'Los Angeles, USA',
      avatar_url: 'https://example.com/avatar2.jpg',
      email: 'jFoster@example.com',
      html_url: 'https://example.com/Foster',
      company: 'Innovated Corp',
    },
    {
      login: 'WayneJ',
      name: 'John Wayne',
      username: 'WayneJ',
      location: 'Chicago, USA',
      avatar_url: 'https://example.com/avatar3.jpg',
      email: 'Wayne.John@example.com',
      html_url: 'https://example.com/WaynethePayne',
      company: 'Creature Co',
    },
  ];
const filteredCandidates = savedCandidates.filter((candidate) =>
  candidate.name?.toLowerCase().includes(searchQuery.toLowerCase())
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