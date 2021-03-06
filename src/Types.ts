export type difficultyType = 'EASY'|'IMPOSSIBLE'|'DIFFICULT'|'HARD'|'MEDIUM';

export type NavType = 'home'|'play'|'recent'|'leaderboards'|'profile'|'none';

export type BasicHole = {
  ID: string;
  Name: string;
  Difficulty: difficultyType;
  Question: string;

  CreatedAt: Date;
  CreatedBy: string;
  LastUpdatedAt: Date;
  Active: boolean;
}

export type BasicLeaderboardEntry = {
  ID: string; // random uuid most likely
  Language: string;
  Version: string;
  Length: number;
  HoleID: string;
  BGID: string;
  GitName: string;
}

export type BasicShortSubmission = {
  ID: string; // random uuid
  Language: string;
  Version: string;
  BGID: string;
  HoleID: string;
  Length: number;
  SubmittedTime: Date;
  Correct: boolean;
  HoleName: string;
}

export type BasicFullSubmission = BasicShortSubmission & {
  HoleName: string;
  Script: string;
}

export type BasicProfile = {
  BGID: string;
  GithubUser: GithubUser;
}

export type GithubUser = {
  AvatarURL: string;
  ID: number;
  Login: string;
  URL: string;
}

export type Claims = {
  BGID: string;
  exp: number;
  iat: number;
}

export type SubmissionResponse = {
  Correct: boolean;
  Length: number;
  CorrectTests: number
  TotalTests: number;
  BestScore: boolean; // BestScore is true if the submission is the best score
}