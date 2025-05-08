export interface Candidate {
  login: string;
  id: number | null;
  avatar_url: string | null;
  html_url: string | null;
  name: string | null;
  location: string | null; // Use null for consistency
  email: string | null;
  company: string | null;
  bio: string | null;
}