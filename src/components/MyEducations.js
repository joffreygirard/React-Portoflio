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
    formationDescription: "Mastère Expert Développement Web en alternance dans l'entreprise Infopolis et à l'école Ynov " +
        "Campus de Toulouse. Cette formation est diplômante d'une certification professionnelle RNCP de niveau 7, " +
        "dénommée Expert Informatique et Systèmes d'Information. La vocation d’Ynov est de proposer des formations " +
        "adaptées aux besoins en compétences des entreprises aujourd’hui.",
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
    formationDescription: "Licence Professionnelle Métiers de l'informatique : Conception développement et test de " +
        "logiciels parcours : développement Web et mobile. Les nouvelles architectures logicielles (APIs, Microservices," +
        " connexions persistantes) ainsi que l'utilisation de Composants Web sont abordés en détail ainsi que l'administration" +
        " de serveurs, l'usage des conteneurs dans le cadre d'applications Web et les problématiques de sécurité.",
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
    formationDescription: "Brevet de Technicien Supérieur, Systèmes numériques option informatique et réseaux." +
        " L'option informatique et réseaux est tournée vers les réseaux et leur sécurité, les systèmes embarqués, " +
        "le cloud computing et la programmation des systèmes. L'objectif de ce BTS est de former l'élève au maintien " +
        "en état de fonctionnement des réseaux, à la sécurisation ainsi qu'au bon fonctionnement de la programmation " +
        "(client/serveur, cloud computing).",
    technologies: [],
    companyDetails: {},
};
let school_lpcb = {
    name: "Lycée Professionnel Château Blanc",
    logo: logo_lpcb,
    formationLevel: "Bac Professionnel",
    formationTitle: "Systèmes Électroniques Numériques",
    dateStart: "Sept. 2014",
    dateEnd: "Juillet 2017",
    duration: "3 ans",
    formationDescription: "Bac Professionnel Systèmes Électroniques Numériques option Télécommunications et Réseaux. " +
        "Il a pour but de former des techniciens capables d’intervenir sur les équipements et les installations " +
        "électroniques ou numériques, que ce soit pour un particulier, un professionnel ou dans le milieu industriel. " +
        "En ce qui concerne le contenu des enseignements, il comprend des matières générales et des matières techniques, " +
        "spécifiques à la formation.",
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
        <Box margin="75px 0 75px 0">
            <Heading className="heading_width" textAlign="center">Ma Formation</Heading>
            <Tabs>
                {educations_tabs}
            </Tabs>
        </Box>

    );
}

export default MyEducations;
