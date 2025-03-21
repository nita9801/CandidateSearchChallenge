// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number; // Unique identifier for the candidate
  name: string; // Candidate's name
  email: string; // Candidate's email address
  avatar_url?: string; // Optional: URL to the candidate's avatar
  bio?: string; // Optional: Candidate's biography
  location?: string; // Optional: Candidate's location
  // Add other fields as needed based on the API response
}