import React from 'react';
import '../App.css';
import {Box, Text} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChess} from "@fortawesome/free-solid-svg-icons";


function MySkill(props) {

    let skill = props.skillDetails;

    return (
        <Box pad="xlarge" align="center">
            <Text>{skill.name}</Text>
            <FontAwesomeIcon icon={faChess} size="4x" />
        </Box>
    );
}

export default MySkill;