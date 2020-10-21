import React from 'react';
import '../App.css';
import {Box, Grid, Heading, Image, Button, Text, Layer} from "grommet";


function MyEducation(props) {

    const [showSchool, setShowSchool] = React.useState();
    const [showLinkedin, setShowLinkedin] = React.useState();

    let school = props.schoolDetails;

    return (
            <Grid rows={["large"]}
                  columns={['auto', '40%']}
                  areas={[
                      ['work-content', 'work-title'],
                  ]}
                  gap="small"
            >

                <Box background="light-2" gridArea="work-content">
                    <Box align="center" direction="column" margin="10%">
                        <Text>Description du poste occupé et principale missions</Text>

                        <Text>Technologies utilisées</Text>

                        <Box direction="row">
                            <Button label="En savoir plus sur l'entreprise" onClick={() => setShowSchool(true)} />
                            {showSchool && (
                                <Layer
                                    onEsc={() => setShowSchool(false)}
                                    onClickOutside={() => setShowSchool(false)}
                                >
                                    <Button label="close1" onClick={() => setShowSchool(false)} />
                                </Layer>
                            )}

                            <Button label="En savoir plus sur mon compte LinkedIn" onClick={() => setShowLinkedin(true)} />
                            {showLinkedin && (
                                <Layer
                                    onEsc={() => setShowLinkedin(false)}
                                    onClickOutside={() => setShowLinkedin(false)}
                                >
                                    <Button label="fermer1" onClick={() => setShowLinkedin(false)} />
                                </Layer>
                            )}
                        </Box>
                    </Box>
                </Box>

                <Box gridArea="work-title" background="light-5">
                    <Box align="center" direction="column" margin="10%">
                        <Image
                            src={school.logo}
                        />

                        <Heading size="small" margin="0 0 0 0" textAlign="center">{school.name}</Heading>

                        <Text margin="30px 0 0 0" textAlign="center">{school.positionTitle}</Text>
                        <Text textAlign="center">{school.positionDescription}</Text>

                        <Text margin="30px 0 0 0" textAlign="center">Sept. 2019 - Sept. 2020</Text>
                        <Text textAlign="center">En cours</Text>
                    </Box>
                </Box>

            </Grid>
    );
}

export default MyEducation;
