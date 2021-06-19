import React from 'react';
import Button from '../Components/Button/Button';
import Nav from '../Components/Nav/Nav';
import { PrimaryColor } from '../Globals';
import Leaderboard from '../Components/Leaderboard/Leaderboard';
import './screen.css';
import { BasicHole } from '../Types';
import MySubmissions from '../Components/MySubmissions/MySubmissions';
import { ListHoles } from '../Store/Holes';
import { useQuery } from 'react-query';
 

const LeaderboardScreen: React.FC = () => {
  const [selectedHole, setSelectedHole] = React.useState<BasicHole|null>(null);

  // TODO: Get holes & Leaders for each hole
  const holes = useQuery('Holes', () =>  ListHoles());
  if (holes.isLoading) return (<p>Is loading holes!</p>);
  if (holes.isError || !holes.data) return (<p>Error getting holes: {holes.error}</p>)



  const onHoleClick = (hole: BasicHole) => {
    if (hole.ID === selectedHole?.ID) return;
    setSelectedHole(hole);
  }

  const isHoleActive = (hole: BasicHole|null): boolean => {
    if (!hole) return false;
    if (hole.ID === selectedHole?.ID) return true;
    return false
  }

  const leaderboard = (): JSX.Element => {
    if (!selectedHole) return (<></>);

    return (
      <div className='screenContainer'>
        <p className='screenSubText'>LEADERS FOR {selectedHole.Name.toUpperCase()}</p>
        <Leaderboard holeID={selectedHole.ID} />
      </div>
    )
  }

  const submissions = (): JSX.Element => {
    if (!selectedHole) return (<></>);

    return (
      <div className='screenContainer'>
        <p className='screenSubText'>MY SUBMISSIONS</p>
        <MySubmissions holeID={selectedHole.ID} />
      </div>
    )
  }

  return (
    <div>
      <Nav active={'leaderboards'} />
      <p className='screenTitle'>LEADERBOARDS</p>
      <div className='holesBtnContainer'>
        {holes.data.map(hole => <Button onPress={() => onHoleClick(hole)} active={isHoleActive(hole)} color={PrimaryColor} activeColor='white' fontSize='1rem' text={hole.Name} />)}
      </div>
      
      {leaderboard()}
      {submissions()}
    </div>
  );
}

export default LeaderboardScreen;