import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { PrimaryColor } from '../../Globals';
import { BASIC_LEADERBOARDS } from '../../Mock/BasicLeaderboards';
import { useHistory } from 'react-router-dom';

type Props = {
  holeID: string;
  limit?: number;
}

const Leaderboard: React.FC<Props> = (props) => {
  const limit = props.limit ? props.limit : 5;
  const leaders = BASIC_LEADERBOARDS;

  const classes = useStyles();
  const history = useHistory();

  // TODO: add a check if no leaders for hole yet

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TCell>PLACE</TCell>
            <TCell align='left'>GOLFER</TCell>
            <TCell align='right'>SCORE</TCell>
            <TCell align='right'>LANGUAGE</TCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaders.map(leader => (
            <TRow key={leader.ID} onClick={() => history.push(`/profile/${leader.BGID}`)}>
              <TCell padding={'none'} style={{padding: '10px'}} component="th" scope="row">{leader.Place}</TCell>
              <TCell padding={'none'} style={{padding: '10px'}} align='left'>{leader.GitName.toUpperCase()}</TCell>
              <TCell padding={'none'} style={{padding: '10px'}} align='right'>{leader.Score}</TCell>
              <TCell padding={'none'} style={{padding: '10px'}} align='right'>{leader.Language.toUpperCase()}</TCell>
            </TRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


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
  }
})) (TableCell);

const TRow = withStyles((theme: Theme) => createStyles({
  root: {
    cursor: 'pointer',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      // textDecoration: 'underline',
      backgroundColor: 'lightgreen',
    },
    '&:active': {
      backgroundColor: PrimaryColor,
      color: 'white'
    }
  }
})) (TableRow);

const useStyles = makeStyles({
  table: {
    width: '980px',
    border: '1px solid #CCC',
    marginBottom: '5rem',
    marginTop: '1rem'
  },
});

export default Leaderboard;