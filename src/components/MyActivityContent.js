import React from 'react';
import '../App.css';
import {Box, Button, Text, Layer} from "grommet";


function MyActivityContent(props) {
    let element_content = props.element_content;

    return (
        <Box align="center" direction="column" margin="10%">
            <Text textAlign="center">{element_content.description}</Text>

            <Box direction="row" margin="10% 10% 5% 10%">
                <Text margin="0 5px">test</Text>
                <Text margin="0 5px">test</Text>
                <Text margin="0 5px">test</Text>
                <Text margin="0 5px">test</Text>
                <Text margin="0 5px">test</Text>
                <Text margin="0 5px">test</Text>
                <Text margin="0 5px">test</Text>
            </Box>

            <Box direction="row" margin="30px">
                <Button primary label="En savoir plus sur l'entreprise" margin="10px" color="#000394" />

                <Button primary label="En savoir plus sur mon compte LinkedIn" margin="10px" color="#000394" />
            </Box>
        </Box>
    );
}

export default MyActivityContent;
