import React from 'react';
import '../App.css';
import {Box, Grid, Heading, Image, Tab, Tabs, Text,} from "grommet";
import logo_bldeveloppement from "../images/logo_bldeveloppement.png";

import MyWorkExperience from "./MyWorkExperience";

function MyWorkExperiences() {
    return (
        <Tabs>
            <Tab title="INFOPOLIS">
                <MyWorkExperience companyName="INFOPOLIS" />
            </Tab>
            <Tab title="BLDEVELOPPEMENT">
                <MyWorkExperience companyName="BLDEVELOPPEMENT"/>
            </Tab>
            <Tab title="CMRP">
                <MyWorkExperience companyName="CMRP" />
            </Tab>
            <Tab title="EISGE">
                <MyWorkExperience companyName="EISGE" />
            </Tab>
        </Tabs>
    );
}

export default MyWorkExperiences;
