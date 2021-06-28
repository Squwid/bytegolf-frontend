export type difficultyType = 'EASY'|'IMPOSSIBLE'|'DIFFICULT'|'HARD'|'MEDIUM';

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
  GithubUser: GithubUser;
}

export type GithubUser = {
  AvatarURL: string;
  ID: number;
  Login: string;
  URL: string;
}