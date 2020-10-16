import React from 'react';
import './App.css';
import {Grommet, } from 'grommet';
import {  } from 'grommet-icons';

import MyHeader from "./components/MyHeader";
import MyCard from "./components/MyCard";
import MyFooter from "./components/MyFooter";
import MyWorkExperiences from "./components/MyWorkExperiences";


function App() {
    return (
        <Grommet themeMode="dark">
            <MyHeader/>
            <MyCard/>
            <MyWorkExperiences/>
            <MyFooter/>
        </Grommet>
    );
}

export default App;
