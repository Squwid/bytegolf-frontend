import React from 'react';
import { PrimaryColor } from '../../Globals';
import CSS from 'csstype';
import '../../Fonts/FiraCode/fira-code.css';
import Logo from '../../Logo/bytegolf_logo-half.png';
import './Nav.css';

type Props = {
  active: 'home'|'play'|'recent'|'leaderboards'|'profile';
}

const Nav: React.FC<Props> = (props) => {
  const link = (txt: string): JSX.Element => {
    let cName = props.active === txt.toLowerCase() ? "selected" : "text";

    return (<p className={cName}>{txt}</p>);
  }

  return (
    <div style={navbar}>
      <div style={navbarContent}>
        {/* Logo and Bytegolf text */}
        <div style={multiLinkContainer}>
          <img style={logo} src={Logo} alt="Bytegolf Logo" />
          {link('BYTEGOLF')}
        </div>

        {/* Actual links */}
        <div style={multiLinkContainer}>
          {link('PLAY')}
          {link('RECENT')}
          {link('LEADERBOARDS')}
          {link('PROFILE')}
        </div>


      </div>
    </div>
  );
}

const logo: CSS.Properties = {
  maxHeight: '2.5rem',
  paddingRight: '0.313rem'
}

const multiLinkContainer: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly'
}

const navbarContent: CSS.Properties = {
  width: '40%',
  minWidth: '980px',
  margin: '0 auto',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
}

const navbar: CSS.Properties = {
  width: '100%',
  minWidth: '980px',
  backgroundColor: PrimaryColor,
  height: '3.125rem',
}

export default Nav;