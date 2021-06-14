import React from 'react';
import { useParams } from 'react-router';
import { Difficulty } from '../Components/Difficulty';
import Nav from '../Components/Nav/Nav';
import { BASIC_HOLES } from '../Mock/BasicHoles';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { AvailableLanguages, getLanguage, Language } from '../Languages';
import AceEditor from 'react-ace';
import './screen.css';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-powershell';
import 'ace-builds/src-noconflict/mode-batchfile';
import 'ace-builds/src-noconflict/theme-crimson_editor';
import { PrimaryColor, SecondaryColor } from '../Globals';
import Button from '../Components/Button/Button';
import MySubmissions from '../Components/MySubmissions/MySubmissions';

const PlayScreen: React.FC = () => {
  const { holeID } = useParams<{holeID: string}>();
  const [ activeLanguage, setActiveLanguage ] = React.useState<Language>(getLanguage('python2'));
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ len, setLen ] = React.useState(0);
  const [ script, setScript ] = React.useState('');

  const hole = BASIC_HOLES[2];

  const selectButton = (): JSX.Element => {
    return (
      <FormControl style={{width: '25%'}} variant='outlined'>
        <Select
          labelId='language-select'
          id='language-selection'
          value={activeLanguage.language}
          onChange={(e: React.ChangeEvent<{value: unknown}>) => {setActiveLanguage(getLanguage(e.target.value as string))}}
        >
          {AvailableLanguages.map((lang, i) => <MenuItem key={i} value={lang.language}>{lang.name}</MenuItem>)}
        </Select>
      </FormControl>
    );
  }

  return (
    <div>
      <Nav active='play'/>
      <div className='screenContainer'>
        <p className='screenTitle' style={{fontSize: '2.3rem', letterSpacing: '-0.09rem'}}>{hole.Name.toUpperCase()}</p>
        <p className='screenSubText' style={{fontSize: '1.5rem'}}>{hole.Question.toUpperCase()}</p>
        <Difficulty style={{fontSize:'1.3rem', textAlign: 'center'}} difficulty={hole.Difficulty} />
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', flexDirection: 'row'}}>
          <p style={{marginRight: '1rem'}}>LANGUAGE:</p>
          {selectButton()}
        </div>

        <div style={{margin: '0 auto', marginTop: '1rem', display: 'flex', flexDirection: 'row-reverse', flexWrap: 'nowrap', width: '80%'}}>
          <p style={{margin: 0, padding: 0, paddingRight: '10px'}}>BYTES: {len}</p>
        </div>
        <AceEditor
          mode={activeLanguage.editorValue}
          theme='crimson_editor'
          style={{width: '80%', height: '600px', margin: '0 auto'}}
          readOnly={isLoading}
          wrapEnabled={true}
          onChange={(val: string) => { setScript(val); setLen(val.length)}}
          value={script}
        />

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: 'auto'}}>
          <Button color={PrimaryColor} activeColor='white' fontSize='1.1rem' text='SUBMIT' />
          <Button color={SecondaryColor} activeColor='white' fontSize='1.1rem' text='CLEAR' onPress={() => {setScript(''); setLen(0)}} />
        </div>

        <div style={{marginTop: '2rem'}}>
          <p className='screenSubText'>PREVIOUS SUBMISSIONS</p>
          <MySubmissions holeID={holeID} />
        </div>


      </div>
    </div>
  )
}

export default PlayScreen;