import { Candidate } from '../interfaces/Candidate.interface';

const API_URL = 'https://api.github.com/users';

export const getCandidate = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching candidates: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveCandidate = async (candidate: Candidate) => {
  try {
    const response = await fetch('http://localhost:3001/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidate),
    });

    if (!response.ok) {
      throw new Error(`Error saving candidate: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const rejectCandidate = async (candidate: Candidate) => {
  try {
    const response = await fetch('http://localhost:3001/rejected', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidate),
    });

    if (!response.ok) {
      throw new Error(`Error rejecting candidate: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};