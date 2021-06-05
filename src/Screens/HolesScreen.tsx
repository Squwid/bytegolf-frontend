import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import CSS from 'csstype';
import { BASIC_HOLES } from '../Mock/BasicHoles';
import Nav from '../Components/Nav/Nav';
import { PrimaryColor } from '../Globals';

const TCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: PrimaryColor,
    color: theme.palette.common.white,
    fontFamily: 'FiraCode',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '1rem',
    fontFamily: 'FiraCode',
    fontWeight: 'lighter',
    letterSpacing: '-.09rem'
  },
})) (TableCell);

const TRow = withStyles((theme: Theme) => createStyles({
  root: {
    cursor: 'pointer',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }
})) (TableRow);

const useStyles = makeStyles({
  table: {
    width: '980px',
    border: '1px solid #CCC',
    marginBottom: '5rem',
    marginTop: '1rem'
  }
})

const difficulty = (d: string): JSX.Element => {
  let color = 'black';
  switch (d) {
  case 'EASY':
    color = '#20C639'
    break;
  case 'IMPOSSIBLE':
    color = '#FF009D'
    break;
  case 'DIFFICULT':
  case 'HARD':
    color = '#E31717'
    break;
  case 'MEDIUM':
    color = '#EB9F45'
    break;
  }

  return (<p style={{color: color}}>{d}</p>);
}

const HolesScreen: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Nav active='play' />
      <p style={title}>HOLES</p>
      <p style={text}>A LIST OF ALL ACTIVE HOLES</p>
      <div style={container}>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TCell>HOLE</TCell>
                <TCell align='right'>LOWEST SCORE</TCell>
                <TCell align='right'>DIFFICULTY</TCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {BASIC_HOLES.map(hole => (
                <TRow key={hole.ID} onClick={() => console.log(`clicked ${hole.ID}`)}>
                  <TCell component="th" scope="row">{hole.Name.toUpperCase()}</TCell>
                  <TCell align='right'>{hole.LowestScore}</TCell>
                  <TCell align='right'>{difficulty(hole.Difficulty)}</TCell>
                </TRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

const text: CSS.Properties = {
  fontFamily: 'FiraCode',
  fontSize: '1rem',
  textAlign: 'center',
  margin: 0
}

const title: CSS.Properties = {
  fontFamily: 'FiraCode',
  fontSize: '3rem',
  textAlign: 'center',
  marginTop: '1rem',
  marginBottom: '1rem'
}

const container: CSS.Properties = {
  width: '980px',
  margin: '0 auto',
  height: 'auto'
}

export default HolesScreen;