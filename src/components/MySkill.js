import React from 'react';
import '../App.css';
import {Box, Text} from "grommet";
import {Attraction} from "grommet-icons";


function MySkill(props) {

    let skill = props.skillDetails;

    return (
        <Box pad="xlarge" align="center">
            <Text>{skill.name}</Text>
            <Attraction size="xlarge" />
        </Box>
    );
}

export default MySkill;