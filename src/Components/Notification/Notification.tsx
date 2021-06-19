import React from 'react';
import CSS from 'csstype';
import { makeStyles } from '@material-ui/core';
import { PrimaryColor, SecondaryColor } from '../../Globals';

type Props = {
  type: 'info'|'error';
  text: string;
  onClose?: () => void;
  timeout?: number;
  width?: CSS.Property.Width;
  height?: CSS.Property.Height;
  style?: CSS.Properties;
}



const Notification: React.FC<Props> = (props) => {
  const classes = makeStyles({
    info: {
      color: PrimaryColor,
      backgroundColor: '#BCFFC3',
      border: `1px ${PrimaryColor} solid`
    },
    error: {
      color: SecondaryColor,
      backgroundColor: '#FFCFC4',
      border: `1px ${SecondaryColor} solid`
    },
    // exit: {
    //   position: 'absolute',
    //   marginTop: '0px',
    //   fontWeight: 'normal',
    //   paddingLeft: '760px',
    //   color: 'black',
    //   cursor: 'pointer'

    // }
  })();

  return(
    <div className={props.type === 'info' ? classes.info : classes.error} style={{
      height: !!props.height ? props.height : 'auto',
      width: !!props.width ? props.width : 'auto',
      fontFamily: 'FiraCode',
      paddingLeft: '10px',
      paddingRight: '10px',
      borderRadius: '10px',
      cursor: 'pointer',
      ...props.style
    }} onClick={props?.onClose}>
      {/* <p className={classes.exit} onClick={props?.onClose}>X</p> */}
      <p>{props.text.toUpperCase()}</p>
    </div>

  )
}


export default Notification;