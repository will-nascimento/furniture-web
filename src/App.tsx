import React from 'react';
import { ButtonLarge } from './components/ButtonLarge/ButtonLarge.component';

const App: React.FC = () => (
    <>
    <ButtonLarge variation='primary' iconPosition='none' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' iconPosition='left' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='ghost' outline iconPosition='none' title='active button'  />
    <div style={{height:10}}/>
    <ButtonLarge variation='ghost' iconPosition='none' title='active button'/>
    <div style={{height:10}}/>
    <div style={{width:100, height:100, backgroundColor:'black'}}/>
    </>
);

export default App;
 