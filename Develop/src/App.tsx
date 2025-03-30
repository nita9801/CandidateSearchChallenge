import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import CandidateCard from './components/CandidateCard';


const App: React.FC = () => {
  const [candidate, setCandidate] = useState<Array<{
    name?: string;
    login: string;
    location?: string;
    avatar_url: string;
    email?: string;
    html_url: string;
    company?: string;
  }> | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Define searchQuery state

  useEffect(() => {
    fetch('http://localhost:3001/candidates') // Replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setCandidate(data));
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <div style={{ margin: '1rem' }}>
        <input
          type="text"
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button
          onClick={() => console.log('Search triggered:', searchQuery)} // Optional: Debugging
          style={{ padding: '0.5rem' }}
        >
          Search
        </button>
        <button
          onClick={() => setSearchQuery('')} // Clear the search query
          style={{ padding: '0.5rem', marginLeft: '0.5rem' }}
        >
          Clear
        </button>
      </div>
      {candidate &&
        candidate
          .filter((user: any) =>
            user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.login?.toLowerCase().includes(searchQuery.toLowerCase())
          )

          .map((user: any) => (
            <CandidateCard
              candidate={{
                name: user.name || '',
                username: user.login || '',
                login: user.login || '',
                location: user.location || '',
                avatar_url: user.avatar_url || '',
                email: user.email || '',
                html_url: user.html_url || '',
                company: user.company || ''
              }}
              onSave={() => console.log('Saved:', user)}
              onReject={() => console.log('Rejected:', user)}
            />
          ))}

    </div>
  )
};
export default App;