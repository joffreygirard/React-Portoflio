import React from 'react';
import '../App.css';
import { Tab, Tabs, Box, Heading} from "grommet";
import logo_infopolis from "../images/logo_infopolis.png";
import logo_bldeveloppement from "../images/logo_bldeveloppement.png";
import logo_cmrp from "../images/logo_cmrp.png";
import logo_eisge from "../images/logo_eisge.png";

import MyWorkExperience from "./MyWorkExperience";

let experiences = [];

let company_infopolis = {
    name: "INFOPOLIS",
    logo: logo_infopolis,
    positionTitle: "Alternant",
    positionDescription: "Développeur Web FullStack",
    dateStart: "Sept. 2020",
    dateEnd: "",
    duration: "En cours",
    jobDescription: "Gestion de projet, Webmastering Wordpress et Prestashop, développement d'application Web sous Symfony, développement Android & IOS",
    technologies: [],
    companyLink: "https://www.infopolis.fr",
};
let company_bldeveloppement = {
    name: "BLDEVELOPPEMENT",
    logo: logo_bldeveloppement,
    positionTitle: "Alternant",
    positionDescription: "Développeur Web FullStack",
    dateStart: "Sept. 2019",
    dateEnd: "Sept. 2020",
    duration: "12 mois",
    jobDescription: "Développement, maintenance d'application Web et CRM Symfony en apprentissage et connexions aux API (Hubspot, Lyyti, Sirene...)",
    technologies: [],
    companyLink: "https://www.bldeveloppement.fr",
};
let company_cmrp = {
    name: "CMRP",
    logo: logo_cmrp,
    positionTitle: "Stage",
    positionDescription: "Développeur Web FullStack",
    dateStart: "Juin 2018",
    dateEnd: "Juil. 2018",
    duration: "6 semaines",
    jobDescription: "Création de site Web de gestion d'entreprise, type CRM, gestion de base de données (HTML, CSS, Javascript, jQuery, PHP, SQL...)",
    technologies: [],
    companyLink: "https://www.cmrp.fr",
};
let company_eisge = {
    name: "EISGE",
    logo: logo_eisge,
    positionTitle: "Stage",
    positionDescription: "Développeur Web FullStack",
    dateStart: "Avril 2016",
    dateEnd: "Mai 2017",
    duration: "8 semaines",
    jobDescription: "Création d'un site Web de présentation d'une association, collecte de données à partir d'une API Facebook (HTML, CSS, Bootstrap, jQuery, JSON)",
    technologies: [],
    companyLink: "http://www.kalifast.com",
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
        <Box margin="75px 0 75px 0">
            <Heading className="heading_width" textAlign="center">Mes Expériences Professionnelles</Heading>
            <Tabs>
                {experiences_tabs}
            </Tabs>
        </Box>
    );
}

export default MyWorkExperiences;
