import React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { PrimaryColor, SecondaryColor } from '../../Globals';
import { BASIC_MY_SUBMISSIONS } from '../../Mock/BasicSubmissions';
import { BasicSubmission } from '../../Types';



const SubmissionModal: React.FC<{sub?: BasicSubmission, open: boolean, onClose: () => void}> = (props) => {
  return (
    <Modal
      open={props.open && !!props.sub}
      aria-labelledby="Title"
      aria-describedby="Description"
      onClose={props.onClose}
    >
      <p>{props.sub?.Language}</p>
    </Modal>
  );
}

type Props = {
  holeID?: string;
}
const MySubmissions: React.FC<Props> = (props) => {
  const [subModal, setSubModal] = React.useState<BasicSubmission|undefined>(undefined);

  // TODO: When making the call make sure that the user is logged in
  const singleHole = !!props.holeID;
  const submissions = BASIC_MY_SUBMISSIONS;
  const classes = useStyles();
  
  // TODO: Make this look nicer or have some sort of text
  if (submissions.length === 0) {
    return (<></>);
  }

  const onClick = (sub: BasicSubmission) => {
    if (subModal) return;
    setSubModal(sub);
  }

  const onClose = () => {
    setSubModal(undefined);
  }

  let best_score: BasicSubmission|null = BASIC_MY_SUBMISSIONS[0];
  best_score.Score = 15;

  const row = (sub: BasicSubmission, best?: boolean) => (
    <TRow className={best ? classes.best : sub.Correct ? classes.correct : classes.incorrect} key={sub.ID} onClick={() => onClick(sub)}>
      <TCell padding={'none'} style={{padding:'5px'}} component="th" scope="row">{best ? "BEST SCORE" : sub.ID.substr(0, 8)}</TCell>
      <TCell padding={'none'} style={{padding:'5px'}} align='right' scope="row">2 HOURS AGO</TCell>
      <TCell padding={'none'} style={{padding:'5px'}} align='right' scope="row">{sub.Score}</TCell>
      <TCell padding={'none'} style={{padding:'5px'}} align='right' scope="row">{sub.Language}</TCell>
    </TRow>
  );
  
  return (
    <>
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TCell>ID</TCell>
            <TCell align='right'>SUBMITTED</TCell>
            <TCell align='right'>SCORE</TCell>
            <TCell align='right'>LANGUAGE</TCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {best_score && (row(best_score, true))}
          {submissions.map(sub => row(sub))}
        </TableBody>
      </Table>
    </TableContainer>
    <SubmissionModal sub={subModal} onClose={onClose} open={subModal!==undefined}/>
    </>
  )
}

const TCell = withStyles((theme: Theme) => createStyles({
  head: {
    backgroundColor: SecondaryColor,
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
  }
})) (TableRow);

const useStyles = makeStyles({
  table: {
    width: '980px',
    border: '1px solid #CCC',
    marginBottom: '5rem',
    marginTop: '1rem'
  },
  correct: {
    '&:hover': {
      backgroundColor: 'lightgreen'
    },
    '&:active': {
      backgroundColor: '#2BDB7C'
    },
    backgroundColor: '#BCFFC3'
  },
  incorrect: {
    backgroundColor: '#FFCFC4',
    '&:hover': {
      backgroundColor: '#FFB6A5'
    },
    '&:active': {
      backgroundColor: '#FF9D87'
    }
  },
  best: {
    backgroundColor: '#FFF4BB',
    '&:hover': {
      backgroundColor: '#FFED8D'
    },
    '&:active': {
      backgroundColor: '#FFE34F'
    }
  }
});

export default MySubmissions;