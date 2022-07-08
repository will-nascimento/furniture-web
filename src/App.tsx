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
    <ButtonLarge variation='primary' iconPosition='right' title='active button'  />
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' iconPosition='centerLeft' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='primary' icon={<HeartIcon color='#aa4522'/>} iconPosition='centerRight' title='active button'/>
    <div style={{height:10}}/>

    <ButtonLarge variation='secondary' iconPosition='none' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='secondary' iconPosition='left' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='secondary' iconPosition='right' title='active button'  />
    <div style={{height:10}}/>
    <ButtonLarge variation='secondary' iconPosition='centerLeft' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='secondary' icon={<HeartIcon color='#aa4522'/>} iconPosition='centerRight' title='active button'/>
    <div style={{height:10}}/>

    <ButtonLarge variation='ghost' iconPosition='none' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='ghost' iconPosition='left' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='ghost' iconPosition='right' title='active button'  />
    <div style={{height:10}}/>
    <ButtonLarge variation='ghost' iconPosition='centerLeft' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='ghost' icon={<HeartIcon color='#aa4522'/>} iconPosition='centerRight' title='active button'/>
    <div style={{height:10}}/>

    <ButtonLarge variation='outline' iconPosition='none' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='outline' iconPosition='left' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='outline' iconPosition='right' title='active button'  />
    <div style={{height:10}}/>
    <ButtonLarge variation='outline' iconPosition='centerLeft' title='active button'/>
    <div style={{height:10}}/>
    <ButtonLarge variation='outline' icon={<HeartIcon color='#aa4522'/>} iconPosition='centerRight' title='active button'/>
    <div style={{height:10}}/>
    </>
);

export default App;
 