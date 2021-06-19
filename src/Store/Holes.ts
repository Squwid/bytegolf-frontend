
import { BackendURL } from "../Globals";
import { BasicHole } from "../Types";

export const ListHoles = async(): Promise<BasicHole[]> => {
  return new Promise((res, rej) => {
    let url = `${BackendURL()}/holes`;

    console.log(`*** ${url}`);
  
    fetch(url)
      .then(resp => {
        if (resp.status !== 200) return rej(`Got bad status code ${resp.status}`);

        res(resp.json());
      })
      .catch(err => rej(`Error getting holes : ${err}`));
  });
}

export const GetHole = async(id: string): Promise<BasicHole|undefined> => {
  return new Promise((res, rej) => {
    let url = `${BackendURL()}/hole/${id}`;

    console.log(`*** ${url}`);

    fetch(url)
      .then(resp => {
        if (resp.status === 404) return res(undefined);
        if (resp.status !== 200) return rej(`Got bad status code ${resp.status}`);

        res(resp.json());
      })
      .catch(err => rej(`Error getting hole : ${err}`));
  })
}