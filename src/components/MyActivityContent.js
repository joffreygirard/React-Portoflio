import React from 'react';
import '../App.css';
import {Box, Button, Text, Anchor, ResponsiveContext} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";


function MyActivityContent(props) {

    const size = React.useContext(ResponsiveContext);

    let element_content = props.element_content;

    return (
        <Box align="center" direction="column" margin="10%">
            <Text textAlign="center">{element_content.description}</Text>

            {size === "small" ? (
                <Box direction="column" margin="30px" className="text_center">
                    <Anchor href={element_content.elementLink} target="_blank" title="En savoir plus sur l'entreprise" hoverIndicator>
                        <Button primary label="En savoir plus sur l'entreprise" margin="10px" color="#000394" />
                    </Anchor>

                    <Anchor href="https://www.linkedin.com/in/joffrey-g-ab2053141/" target="_blank" title="En savoir plus sur mon compte Linkedin" hoverIndicator>
                        <Button primary label="En savoir plus sur mon compte LinkedIn" margin="10px" color="#000394" />
                    </Anchor>
                </Box>
                ) : (
                    <Box direction="row" margin="30px">
                        <Anchor href={element_content.elementLink} target="_blank" title="En savoir plus sur l'entreprise" hoverIndicator>
                            <Button primary label="En savoir plus sur l'entreprise" margin="10px" color="#000394" />
                        </Anchor>

                        <Anchor href="https://www.linkedin.com/in/joffrey-g-ab2053141/" target="_blank" title="En savoir plus sur mon compte Linkedin" hoverIndicator>
                            <Button primary label="En savoir plus sur mon compte LinkedIn" margin="10px" color="#000394" />
                        </Anchor>
                    </Box>
                )
            }
        </Box>
    );
}

export default MyActivityContent;
