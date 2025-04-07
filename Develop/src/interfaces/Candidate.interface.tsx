
export interface Candidate {
  id: number;
  login: string;
  html_url:string;
  name: string;
  email?: string;
  avatar_url: string;
  bio?: string;
  location?: string;
  company?:string;
}