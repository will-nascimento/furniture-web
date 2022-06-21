import React from 'react';
import HeartIcon from './assets/icons/heart';
import { ButtonLarge } from './components/ButtonLarge/ButtonLarge.component';
import colors from './styles/colors';

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
    <ButtonLarge variation='primary' icon={<HeartIcon color='#aa4522'/>} iconPosition='centerRight' title='active button'/>
    <div style={{height:10}}/>
    </>
);

export default App;
 