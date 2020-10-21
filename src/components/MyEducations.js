import React from 'react';
import '../App.css';
import { Tab, Tabs, } from "grommet";
import logo_bldeveloppement from "../images/logo_bldeveloppement.png";

import MyEducation from "./MyEducation";

let educations = [];

let school_infopolis = {
    name: "INFOPOLIS",
    logo: logo_bldeveloppement,
    positionTitle: "Alternant",
    positionDescription: "Développeur Web FullStack",
};
let school_bldeveloppement = {
    name: "BLDEVELOPPEMENT",
    logo: logo_bldeveloppement,
    positionTitle: "Alternant",
    positionDescription: "Développeur Web FullStack",
};
let school_cmrp = {
    name: "CMRP",
    logo: logo_bldeveloppement,
    positionTitle: "Stage",
    positionDescription: "Développeur Web FullStack",
};
let school_eisge = {
    name: "EISGE",
    logo: logo_bldeveloppement,
    positionTitle: "Stage",
    positionDescription: "Développeur Web FullStack",
};

educations.push(
    school_infopolis,
    school_bldeveloppement,
    school_cmrp,
    school_eisge,
);

const educations_tabs = educations.map((school) =>
    <Tab key={school.name} title={school.name}>
        <MyEducation schoolDetails={school} />
    </Tab>
);

function MyEducations() {
    return (
        <Tabs>
            {educations_tabs}
        </Tabs>
    );
}

export default MyEducations;
