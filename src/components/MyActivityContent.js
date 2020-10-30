import React from 'react';
import '../App.css';
import {Box, Button, Text, Layer} from "grommet";


function MyActivityContent(props) {

    const [showCompany, setShowCompany] = React.useState();
    const [showLinkedin, setShowLinkedin] = React.useState();

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
                <Button label="En savoir plus sur l'entreprise" margin="10px" onClick={() => setShowCompany(true)} />
                {showCompany && (
                    <Layer
                        onEsc={() => setShowCompany(false)}
                        onClickOutside={() => setShowCompany(false)}
                    >
                        <Button label="close" onClick={() => setShowCompany(false)} />
                    </Layer>
                )}

                <Button label="En savoir plus sur mon compte LinkedIn" margin="10px" onClick={() => setShowLinkedin(true)} />
                {showLinkedin && (
                    <Layer
                        onEsc={() => setShowLinkedin(false)}
                        onClickOutside={() => setShowLinkedin(false)}
                    >
                        <Button label="fermer" onClick={() => setShowLinkedin(false)} />
                    </Layer>
                )}
            </Box>
        </Box>
    );
}

export default MyActivityContent;
