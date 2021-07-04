import React from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import { BackendURL, RawBackendURL } from '../Globals';
import { Claims } from '../Types';

const ProfileRedirectScreen: React.FC = () => {
  const history = useHistory();

  React.useEffect(() => {
    let url = `${BackendURL()}/claims`;
    console.log(`*** ${url}`);

    fetch(url, {credentials: 'include'})
      .then(async resp => {
        console.log(`*** RESP STATUS FROM LOGIN CHECK ${resp.status}`);

        if (resp.status === 401) {
          window.location.href = `${RawBackendURL()}/login`;
        } else if (resp.status === 200) {
          const claims: Claims = await resp.json();
          history.push(`/profile/${claims.BGID}`);
        } else {
          console.log(`Got bad status code ${resp.status}`);
          history.push('/');
        }
      })
      .catch(e => {
        console.log(`encountered unexpected error ${e}`);
        history.push('/');
      })
  }, [history]);

  return (
  <div>
    <Nav active={'profile'} />
    Redirect Loading Screen...
  </div>);
}

export default ProfileRedirectScreen;