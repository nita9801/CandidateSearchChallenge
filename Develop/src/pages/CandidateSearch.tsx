import React, { useEffect, useState } from 'react';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[] | null>(null);
  const [ index,setIndex]= useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate>({
    id: 0,
    login: '',
    avatar_url: '',
    html_url: '',
    email: '',
    name: '',
    bio: '',
  });

  //when the component loads get a list of candidates

  useEffect(function () {
    async function getCandidates() {
      const users = await searchGithub();
      console.log('Fetched users:', users);
    setCandidates(users);

    if (users.length > 0) {
      const user = await searchGithubUser(users[0].login);
      setSelectedCandidate(user);
    };
  };
    getCandidates();
}, []);

  // Display the first candidate in the list
useEffect(function(){
  async function getCandidateInfo() {
    if (!candidates || !candidates[index]) {
      console.error (' Invalid Candidate');
      return;
    }

    const username = candidates[index].login;
    if (!username) {
      console.error('Invalid username');
      return;
    }

    try {
      const user = await searchGithubUser(candidates[index].login);
      setSelectedCandidate(user);
    } catch (error) {
      console.error('Error fetching candidate details:', error);
    }

    // use the other function to get the candidate details
  const user= await searchGithubUser(candidates[index].login);
  setSelectedCandidate(user)
  }
  getCandidateInfo();
},
[index, candidates]);

  // when they save or reject candidate go to the next in line
const saveCandidate = (candidate: Candidate) => {
  console.log('saving Candidate', candidate);

  let savedCandidates;
  try {
    savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
  } catch (error) {
    console.error('Error parsing savedCandidates from localStorage:', error);
    savedCandidates = [];
  }
  savedCandidates.push(candidate);
  localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));

  if (candidates && index + 1 < candidates.length) {
    setIndex(index + 1);
  } else {
    console.log('No more candidates to display');
  }
};

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard
        key={selectedCandidate.email} // Use a unique identifier, such as `email`
        candidate={selectedCandidate}
        onSave={() => saveCandidate(selectedCandidate)}
        onReject={() => setIndex(index+1)}
      />
    </div>      
  );
}
export default CandidateSearch