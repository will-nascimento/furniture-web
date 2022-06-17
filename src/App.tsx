import React from 'react';
import { ButtonLarge } from './components/ButtonLarge/ButtonLarge.component';

const App: React.FC = () => (
    <>
    <ButtonLarge variation='primary' iconPosition='none' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' iconPosition='left' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' outline iconPosition='right' title='active button'  />
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' iconPosition='centerLeft' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' iconPosition='centerRight' title='active button'/>
    <div style={{height:10}}/>
    </>
);

export default App;
 