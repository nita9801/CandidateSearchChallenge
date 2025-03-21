import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CandidateSearch />} />
          <Route path="/saved" element={<SavedCandidates />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
