import React from 'react';
import '../App.css';
import {Box, Grid, Heading, Image, Button, Text, Layer} from "grommet";


function MyWorkExperience(props) {

    const [showCompany, setShowCompany] = React.useState();
    const [showLinkedin, setShowLinkedin] = React.useState();

    let company = props.companyDetails;

    return (
            <Grid rows={["large"]}
                  columns={['40%', 'auto']}
                  areas={[
                      ['work-title', 'work-content'],
                  ]}
                  gap="small"
            >

                <Box gridArea="work-title" background="light-5">
                    <Box align="center" direction="column" margin="10%">
                        <Image
                            src={company.logo}
                        />

                        <Heading size="small" margin="0 0 0 0" textAlign="center">{company.name}</Heading>

                        <Text margin="30px 0 0 0" textAlign="center">{company.positionTitle}</Text>
                        <Text textAlign="center">{company.positionDescription}</Text>

                        <Text margin="30px 0 0 0" textAlign="center">Sept. 2019 - Sept. 2020</Text>
                        <Text textAlign="center">En cours</Text>
                    </Box>
                </Box>

                <Box background="light-2" gridArea="work-content">
                    <Box align="center" direction="column" margin="10%">
                        <Text>Description du poste occupé et principale missions</Text>

                        <Text>Technologies utilisées</Text>

                        <Box direction="row">
                            <Button label="En savoir plus sur l'entreprise" onClick={() => setShowCompany(true)} />
                            {showCompany && (
                                <Layer
                                    onEsc={() => setShowCompany(false)}
                                    onClickOutside={() => setShowCompany(false)}
                                >
                                    <Button label="close" onClick={() => setShowCompany(false)} />
                                </Layer>
                            )}

                            <Button label="En savoir plus sur mon compte LinkedIn" onClick={() => setShowLinkedin(true)} />
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
                </Box>

            </Grid>
    );
}

export default MyWorkExperience;
