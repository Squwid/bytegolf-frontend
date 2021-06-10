import React from 'react';
import Button from '../Components/Button/Button';
import Nav from '../Components/Nav/Nav';
import { PrimaryColor } from '../Globals';
import { BASIC_HOLES } from '../Mock/BasicHoles';
import Leaderboard from '../Components/Leaderboard/Leaderboard';
import './screen.css';


const LeaderboardScreen: React.FC = () => {
  const [selectedHole, setSelectedHole] = React.useState('');

  // TODO: Get holes & Leaders for each hole
  const holes = BASIC_HOLES;

  return (
    <div>
      <Nav active={'leaderboards'} />
      <p className='screenTitle'>LEADERBOARDS</p>
      <div className='holesBtnContainer'>
        {holes.map(hole => <Button onPress={() => {if (hole.ID === selectedHole){return};setSelectedHole(hole.ID)}} active={selectedHole === hole.ID} color={PrimaryColor} activeColor='white' fontSize='1rem' text={hole.Name} />)}
      </div>
      <div className='screenContainer'>
        <Leaderboard holeID={holes[0].ID} />
      </div>
    </div>
  );
}

export default LeaderboardScreen;