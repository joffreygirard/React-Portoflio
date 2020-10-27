import React from 'react';
import '../App.css';
import { Tab, Tabs, Box, Heading} from "grommet";
import logo_bldeveloppement from "../images/logo_bldeveloppement.png";

import MyWorkExperience from "./MyWorkExperience";

let experiences = [];

let company_infopolis = {
    name: "INFOPOLIS",
    logo: logo_bldeveloppement,
    positionTitle: "Alternant",
    positionDescription: "Développeur Web FullStack",
};
let company_bldeveloppement = {
    name: "BLDEVELOPPEMENT",
    logo: logo_bldeveloppement,
    positionTitle: "Alternant",
    positionDescription: "Développeur Web FullStack",
};
let company_cmrp = {
    name: "CMRP",
    logo: logo_bldeveloppement,
    positionTitle: "Stage",
    positionDescription: "Développeur Web FullStack",
};
let company_eisge = {
    name: "EISGE",
    logo: logo_bldeveloppement,
    positionTitle: "Stage",
    positionDescription: "Développeur Web FullStack",
};

experiences.push(
    company_infopolis,
    company_bldeveloppement,
    company_cmrp,
    company_eisge,
);

const experiences_tabs = experiences.map((company) =>
    <Tab key={company.name} title={company.name}>
        <MyWorkExperience companyDetails={company} />
    </Tab>
);

function MyWorkExperiences() {
    return (
        <Box>
            <Heading textAlign="center">Mes Expériences Professionnelles</Heading>
            <Tabs>
                {experiences_tabs}
            </Tabs>
        </Box>
    );
}

export default MyWorkExperiences;
