import React from 'react';
import '../App.css';
import {Box, Text, Heading, ResponsiveContext} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function MySkill(props) {

    const size = React.useContext(ResponsiveContext);

    let skill = props.skillDetails;

    let skill_icons = skill.skills.map((icon) =>
        <Text textAlign="center" margin="10px 15px"><FontAwesomeIcon icon={icon} size="3x" /></Text>
    );

    return (
        <Box pad="xlarge" align="center">
            <Heading size="small" textAlign="center">{skill.name}</Heading>

            {size === "small" ? (
                <Box direction="column">
                    {skill_icons}
                </Box>
                ) : (
                    <Box direction="row">
                        {skill_icons}
                    </Box>
                )
            }

        </Box>
    );
}

export default MySkill;