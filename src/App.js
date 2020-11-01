import React from 'react';
import './App.css';
import {Grommet, } from 'grommet';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MyHeader from "./components/MyHeader";
import MyCard from "./components/MyCard";
import MyFooter from "./components/MyFooter";
import MyWorkExperiences from "./components/MyWorkExperiences";
import MyEducations from "./components/MyEducations";
import MySkills from "./components/MySkills";
import MyHobbies from "./components/MyHobbies";
import MyContact from "./components/MyContact";


function App() {
    return (
        <Router>
            <Grommet themeMode="dark">
                <Switch>
                    <Route exact path="/">
                        <MyHeader/>
                        <MyCard/>
                        <MyWorkExperiences/>
                        <MyEducations/>
                        <MySkills/>
                        <MyHobbies/>
                        <MyContact/>
                        <MyFooter/>
                    </Route>

                    <Route path="/work-experiences">
                        <MyHeader/>
                        <MyWorkExperiences/>
                        <MyFooter/>
                    </Route>

                    <Route path="/educations">
                        <MyHeader/>
                        <MyEducations/>
                        <MyFooter/>
                    </Route>

                    <Route path="/skills">
                        <MyHeader/>
                        <MySkills/>
                        <MyFooter/>
                    </Route>

                    <Route path="/hobbies">
                        <MyHeader/>
                        <MyHobbies/>
                        <MyFooter/>
                    </Route>

                    <Route path="/contact">
                        <MyHeader/>
                        <MyContact/>
                        <MyFooter/>
                    </Route>
                </Switch>
            </Grommet>
        </Router>
    );
}

export default App;
