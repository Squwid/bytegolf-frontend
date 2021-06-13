export type BasicHole = {
  ID: string;
  Difficulty: string;
  Name: string;
  Question: string;
  LowestScore: number;
}

export type BasicLeaderboardEntry = {
  ID: string; // random uuid most likely
  Place: number;
  BGID: string;
  GitName: string;
  Score: number;
  Language: string;
  HoleID: string;
}

export type BasicSubmission = {
  ID: string; // random uuid
  Score: number;
  Language: string;
  BGID: string;
  GitName: string;  
  HoleID: string;
  HoleName: string;
  Correct: boolean;
  Script: string;
}

export type BasicProfile = {
  BGID: string;
  CreatedTime: Date;
  URL: string;
  AvatarURL: string;
  ID: string;
  Login: string; // Login is profile name
}