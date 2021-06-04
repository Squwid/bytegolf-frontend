import { Button } from '@material-ui/core';
import React from 'react';
import CSS from 'csstype';
import Nav from '../Components/Nav/Nav';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Nav active={'home'}/>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
    </div>
  )
}

const bodyContainer: CSS.Properties = {
  width: '40%',
  minWidth: '980px',
  backgroundColor: 'orange',
  height: '100vh',
  margin: '0 auto'
}

export default HomeScreen;