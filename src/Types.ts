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

/*
// ShortSubmission is the short submission for the frontend to list all submissions,
// correct or incorrect without the entire script
type ShortSubmission struct {
	ID            string
	Language      string
	Version       string
	BGID          string
	HoleID        string
	Length        int64
	SubmittedTime time.Time
	Correct       bool
}

// FullSubmission is the full submission for the frontend including the script and all short submission data
type FullSubmission struct {
	ShortSubmission

	HoleName string
	Script   string
}
*/

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