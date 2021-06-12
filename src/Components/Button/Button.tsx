import React from 'react';
import CSS from 'csstype';
import './Button.css';
import { makeStyles } from '@material-ui/core';
import { PrimaryColor, ThirdColor } from '../../Globals';

type Props = {
  to?: string;
  fontSize?: CSS.Property.FontSize;
  color: CSS.Property.Color;
  activeColor?: CSS.Property.Color;

  text: string;
  margins?: CSS.Property.Margin;
  active?: boolean;
  onPress?: () => void;
}

const Button: React.FC<Props> = (props) => {
  const margin = !!props.margins ? props.margins : 5;
  const activeText = !!props.activeColor ? props.activeColor : ThirdColor;
  const hoverColor = !!props.active ? props.color : 'lightgreen';

  let button = makeStyles({
    btn: {
      fontFamily: 'FiraCode',
      fontSize: !!props.fontSize ? props.fontSize : '1rem',
      padding: '0.5rem',
      border: `3px ${props.color} solid`,
      backgroundColor: props.active ? PrimaryColor : 'white',
      cursor: 'pointer',
      color: ThirdColor,
      letterSpacing: '-.08rem',
      margin: margin,
      '&:hover': {
        backgroundColor: hoverColor
      },
      '&:active': {
        backgroundColor: props.color,
        color: activeText
      }
    }
  })

  const classes = button();

  return (
    <div className={classes.btn} onClick={props?.onPress}>
      {props.text.toUpperCase()}
    </div>
  );
}



export default Button;