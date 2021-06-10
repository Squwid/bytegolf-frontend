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
}