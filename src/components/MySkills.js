import React from "react";
import '../App.css';
import {Box, Carousel, Heading} from "grommet";

import {faDatabase, faNetworkWired, faWifi, faServer, faPhoneVolume, faUserCog, faTools, faUsers, faFolder, faLanguage, faSort} from "@fortawesome/free-solid-svg-icons";
import {faPhp, faSymfony, faJava, faPython, faNode, faHtml5, faCss3, faJs, faVuejs, faBootstrap, faUncharted} from "@fortawesome/free-brands-svg-icons";

import MySkill from "./MySkill";


let skills = [];

let skill_backend = {
    name: "BackEnd",
    skills: [
        faPhp,
        faSymfony,
        faJava,
        faNode,
        faPython,
        faDatabase,
    ],
};
let skill_frontend = {
    name: "FrontEnd",
    skills: [
        faHtml5,
        faCss3,
        faJs,
        faVuejs,
        faBootstrap,
    ],
};
let skill_network = {
    name: "Réseaux",
    skills: [
        faNetworkWired,
        faWifi,
        faServer,
        faPhoneVolume,
        faUserCog,
        faTools,
    ],
};
let skill_softskills = {
    name: "Compétences Générales",
    skills: [
        faFolder,
        faUsers,
        faLanguage,
        faUncharted,
        faSort,
    ],
};

skills.push(
    skill_backend,
    skill_frontend,
    skill_network,
    skill_softskills,
);

const skills_boxes = skills.map((skill) =>
    <MySkill skillDetails={skill}/>
);

function MySkills() {
    return (
        <Box width="auto" pad="medium" margin="75px 0 75px 0">
            <Heading className="heading_width" textAlign="center">Mes compétences</Heading>

            <Carousel>
                {skills_boxes}
            </Carousel>
        </Box>
    );
}

export default MySkills;
