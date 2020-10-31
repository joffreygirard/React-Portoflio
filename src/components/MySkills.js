import React from "react";
import '../App.css';
import {Box, Carousel, Text, Heading, Tab} from "grommet";
import MySkill from "./MySkill";


let skills = [];

let skill_backend = {
    name: "BackEnd",
};
let skill_frontend = {
    name: "FrontEnd",
};
let skill_network = {
    name: "Réseaux",
};
let skill_softskills = {
    name: "Compétences Générales",
};
let skill_languages = {
    name: "Langages",
};

skills.push(
    skill_backend,
    skill_frontend,
    skill_network,
    skill_softskills,
    skill_languages,
);

const skills_boxes = skills.map((skill) =>
    <MySkill skillDetails={skill}/>
);

function MySkills() {
    return (
        <Box width="auto" overflow="" pad="medium">
            <Heading textAlign="center">Mes compétences</Heading>

            <Carousel>
                {skills_boxes}
            </Carousel>
        </Box>
    );
}

export default MySkills;
