import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={CandidateSearch} />
          <Route path="/saved" component={SavedCandidates} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;
