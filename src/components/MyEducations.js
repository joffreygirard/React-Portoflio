import React from 'react';
import '../App.css';
import {Heading, Tab, Tabs, Box} from "grommet";

import MyEducation from "./MyEducation";

import logo_ynov from "../images/logo_ynov.png";
import logo_iut_orleans from "../images/logo_iut_orleans.png";
import logo_durzy from "../images/logo_durzy.png";
import logo_lpcb from "../images/logo_lpcb.png";

let educations = [];


let school_ynov = {
    name: "YNOV CAMPUS TOULOUSE",
    logo: logo_ynov,
    formationLevel: "Mastère",
    formationTitle: "Expert Développement Web",
    dateStart: "Sept. 2020",
    dateEnd: "",
    duration: "En cours",
    formationDescription: "Gestion de projet, Webmastering Wordpress et Prestashop, développement d'application Web sous Symfony, développement Android & IOS",
    technologies: [],
    companyDetails: {},
};
let school_iut_orleans = {
    name: "Univerité d'Orléans",
    logo: logo_iut_orleans,
    formationLevel: "Licence Professionnelle",
    formationTitle: "Développement Web et Mobile",
    dateStart: "Sept. 2019",
    dateEnd: "Août 2020",
    duration: "1 an",
    formationDescription: "Gestion de projet, Webmastering Wordpress et Prestashop, développement d'application Web sous Symfony, développement Android & IOS",
    technologies: [],
    companyDetails: {},
};
let school_durzy = {
    name: "Lycée Durzy",
    logo: logo_durzy,
    formationLevel: "BTS",
    formationTitle: "Systèmes Numériques, Informatique et Réseaux",
    dateStart: "Sept. 2017",
    dateEnd: "Juillet 2019",
    duration: "2 ans",
    formationDescription: "Gestion de projet, Webmastering Wordpress et Prestashop, développement d'application Web sous Symfony, développement Android & IOS",
    technologies: [],
    companyDetails: {},
};
let school_lpcb = {
    name: "Lycée Professionnel Château Blanc",
    logo: logo_lpcb,
    formationLevel: "Bac Professionnel",
    formationTitle: "Système Électroniques Numériques",
    dateStart: "Sept. 2014",
    dateEnd: "Juillet 2017",
    duration: "3 ans",
    formationDescription: "Gestion de projet, Webmastering Wordpress et Prestashop, développement d'application Web sous Symfony, développement Android & IOS",
    technologies: [],
    companyDetails: {},
};

educations.push(
    school_ynov,
    school_iut_orleans,
    school_durzy,
    school_lpcb,
);

const educations_tabs = educations.map((school) =>
    <Tab key={school.name} title={school.name}>
        <MyEducation schoolDetails={school} />
    </Tab>
);

function MyEducations() {
    return (
        <Box>
            <Heading textAlign="center">Ma Formation</Heading>
            <Tabs>
                {educations_tabs}
            </Tabs>
        </Box>

    );
}

export default MyEducations;
