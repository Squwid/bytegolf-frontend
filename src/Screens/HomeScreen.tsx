import React from 'react';
import CSS from 'csstype';
import Nav from '../Components/Nav/Nav';
import { LightTextColor, PrimaryColor } from '../Globals';
import Logo from '../Logo/bytegolf_logo-half.png';
import { Button } from '@material-ui/core';
import SportsGolfOutlinedIcon from '@material-ui/icons/SportsGolfOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import Markdown from '../Components/Markdown';
import { HomeMarkdown } from '../HomeMarkdown';


const HomeScreen: React.FC = () => {
  return (
    <div>
      <Nav active={'home'}/>
      <div style={headerContainer}>
        <div style={headerContentContainer} >
          <img style={image} src={Logo} alt="Bytegolf Logo" />
          <p style={text}>BYTEGOLF</p>
          <p style={smallText}>Solve code problems in the least amount of bytes!</p>
          <div style={btnGroup}>
            <Button style={{marginRight: '0.625rem'}} variant='contained' color='secondary' startIcon={<SportsGolfOutlinedIcon/>}>TEE OFF</Button>
            <Button variant='contained' color='default' startIcon={<CodeOutlinedIcon/>}>SEE THE SOURCE CODE</Button>
          </div>
        </div>
      </div>

      <div style={bodyContainer}>
        <Markdown markdown={HomeMarkdown} />
      </div>
    </div>
  )
}

const bodyContainer: CSS.Properties = {
  textAlign: 'center',
  width: '980px',
  margin: '0 auto',
  height: 'auto',
  fontFamily: 'FiraCode'
}

const headerContainer: CSS.Properties = {
  width: '100%',
  minWidth: '980px',
  backgroundColor: PrimaryColor,
  minHeight: '26.25rem'
}

const headerContentContainer: CSS.Properties = {
  width: '40%',
  minWidth: '980px',
  margin: '0 auto',
  height: 'auto',

  
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap'
}

const image: CSS.Properties = {
  margin: '0 auto',
  maxHeight: '18.5rem',
  maxWidth: '18.5rem'
}

const text: CSS.Properties = {
  fontFamily: 'FiraCode',
  color: 'white',
  fontSize: '3.75rem',
  textAlign: 'center',
  margin: 0
}

const smallText: CSS.Properties = {
  fontFamily: 'FiraCode',
  color: LightTextColor,
  fontSize: '1.25rem',
  fontWeight: 'lighter',
  textAlign: 'center',
  margin: 0
}

const btnGroup: CSS.Properties = {
  width: 'auto',
  height: 'auto',
  margin: '0 auto',
  marginTop: '2rem',
  marginBottom: '0.625rem'
}

export default HomeScreen;