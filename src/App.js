import React from 'react';
import './App.css';
import {Grommet, } from 'grommet';
import {  } from 'grommet-icons';

import MyHeader from "./components/MyHeader";
import MyCard from "./components/MyCard";
import MyFooter from "./components/MyFooter";
import MyWorkExperiences from "./components/MyWorkExperiences";
import MyEducations from "./components/MyEducations";


function App() {
    return (
        <Grommet themeMode="dark">
            <MyHeader/>
            <MyCard/>
            <MyWorkExperiences/>
            <MyEducations/>
            <MyFooter/>
        </Grommet>
    );
}

export default App;
