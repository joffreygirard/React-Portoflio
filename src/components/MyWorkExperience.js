import React from 'react';
import '../App.css';
import {Box, Grid, Heading, Image, Tab, Text} from "grommet";
import logo_bldeveloppement from "../images/logo_bldeveloppement.png";


function MyWorkExperience(props) {
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
                            src={logo_bldeveloppement}
                        />

                        <Heading size="small" margin="0 0 0 0" textAlign="center">{props.companyName}</Heading>

                        <Text margin="30px 0 0 0" textAlign="center">Alternant Développeur Web FullStack</Text>

                        <Text margin="30px 0 0 0" textAlign="center">Sept. 2019 - Sept. 2020</Text>
                        <Text textAlign="center">En cours</Text>
                    </Box>
                </Box>

                <Box background="light-2" gridArea="work-content">
                    Content 1
                </Box>

            </Grid>
    );
}

export default MyWorkExperience;
