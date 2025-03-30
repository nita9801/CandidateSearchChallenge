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
  const [error, setError] = useState<string | null>(null); // Define error state

    useEffect(() => {
    const fetchAndSetCandidates = async () => {
      try {
        const response = await fetch('http://localhost:3001/candidates');
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
        setCandidate(data);
      } catch (err) {
        console.error('Error fetching candidates:', err);
        setError('Failed to fetch candidates. Please check the backend server.');
      }
    };
  
    fetchAndSetCandidates();
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <div>
        <input
          type="text"
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
        <button
          onClick={() => console.log('Search triggered:', searchQuery)} // Optional: Debugging
        >
          Search
        </button>
        <button
          onClick={() => setSearchQuery('')} // Clear the search query
        >
          Clear
        </button>
      </div>
      {error && (
        <div style={{ color: 'red' }}>
          {error.toString()}
        </div>
      )}
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