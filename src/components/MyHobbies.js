import React from "react";
import '../App.css';
import {Box, Grid, Heading,} from "grommet";


function MyHobbies() {
    return (
        <Grid rows={["xsmall", "small", "small",]}
              columns={['1/3']}
              areas={[
                  ['hobby-title', 'hobby-title', 'hobby-title'],
                  ['hobby-sports', 'hobby-travels', 'hobby-chill'],
                  ['hobby-space', 'hobby-test1', 'hobby-test2'],
              ]}
              gap="small"
        >

            <Box gridArea="hobby-title" background="light-2">
                <Heading textAlign="center">Mes Loisirs</Heading>
            </Box>

            <Box gridArea="hobby-sports" background="light-5">

            </Box>

            <Box gridArea="hobby-travels" background="light-5">

            </Box>

            <Box gridArea="hobby-chill" background="light-5">

            </Box>

            <Box gridArea="hobby-space" background="light-5">

            </Box>

            <Box gridArea="hobby-test1" background="light-5">

            </Box>

            <Box gridArea="hobby-test2" background="light-5">

            </Box>

        </Grid>
    );
}

export default MyHobbies;
