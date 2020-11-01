import React from 'react';
import '../App.css';
import {Box, Heading, Image, Text} from "grommet";


function MyActivityHead(props) {

    let element_head = props.element_head;

    return (
        <Box align="center" direction="column" margin="10%" height="medium">
            <Image fit="contain"
                   src={element_head.logo}
                   className="image_max_width_100"
            />

            <Heading className="heading_width" size="small" margin="0 0 0 0" textAlign="center">{element_head.name}</Heading>

            <Text margin="30px 0 0 0" textAlign="center">{element_head.title}</Text>
            <Text textAlign="center">{element_head.description}</Text>

            <Text margin="30px 0 0 0" textAlign="center">{element_head.dateStart} - {element_head.dateEnd}</Text>
            <Text textAlign="center">{element_head.duration}</Text>
        </Box>
    );
}

export default MyActivityHead;
