import { makeStyles } from '@material-ui/core';
import React from 'react';
import Nav from '../Components/Nav/Nav';
import { PrimaryColor } from '../Globals';
import Logo from '../Logo/bytegolf_logo-not-found-half.png';

const NotFoundScreen: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.notFoundWrapper}>
      <Nav active='none' />
      <div className={classes.notFoundBodyWrapper}>
        <img style={{margin:0, padding:0}} height='250px' width='500px' src={Logo} alt="Bytegolf not found logo" />
        <p style={{color: 'white', fontSize: '1.6rem', margin: 0, padding: 0, textAlign: 'center'}}>LOOKS LIKE A WATER HAZARD.<br/>THE PAGE YOU WERE LOOKING FOR WAS NOT FOUND.</p>
      </div>
    </div>
  )
}

const useStyles= makeStyles({
  notFoundWrapper: {
    height: '100vh',
    minHeight: '500px',
    backgroundColor: PrimaryColor,
  },
  notFoundBodyWrapper: {
    width: '800px',
    margin: '0 auto',
    marginTop: '100px',
    fontFamily: 'FiraCode',
    fontWeight: 'lighter',
    letterSpacing: '-.09rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }
})

export default NotFoundScreen;