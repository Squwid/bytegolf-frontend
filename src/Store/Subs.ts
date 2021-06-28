import { BackendURL } from "../Globals"
import { BasicLeaderboardEntry } from "../Types";

// Returns -1 if does not exist, otherwise returns the score or rejects
export const GetBestHoleScore = async(hole: string): Promise<number> => {
  return new Promise((res, rej) => {
    let url = `${BackendURL()}/leaderboards?limit=1&hole=${hole}`;

    console.log(`*** ${url}`);

    fetch(url)
      .then(resp => {
        if (resp.status !== 200) return rej(`Got bad status code ${resp.status}`);

        (resp.json() as Promise<BasicLeaderboardEntry[]>).then(leaders => {
          if (leaders.length === 0) return res(-1);
          res(leaders[0].Length);
        })
      })
      .catch(err => rej(`Error getting best score ${err}`));
  });
}

export const GetLeaderboard = async(hole: string, limit: number, lang?: string): Promise<BasicLeaderboardEntry[]> => {
  return new Promise((res, rej) => {
    let url = `${BackendURL()}/leaderboards?limit=${limit}&hole=${hole}`;

    if (lang) url += `&lang=${lang}`;

    console.log(`*** ${url}`);

    fetch(url)
      .then(resp => {
        if (resp.status !== 200) return rej(`Got bad status code ${resp.status}`);

        res(resp.json());
      })
      .catch(err => rej(`Error getting leaderboard ${err}`));
  })
}