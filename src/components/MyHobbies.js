import React from "react";
import '../App.css';
import {Box, Grid, Heading, Image,} from "grommet";

import image_travels from "../images/travels.jpg";
import image_chill from "../images/chill.png";
import image_music from "../images/music.png";
import image_sports from "../images/sports.png";
import image_space from "../images/space.jpg";
import image_party from "../images/party.png";


function MyHobbies() {
    return (
        <Grid rows={["xsmall", "small", "small",]}
              columns={['1/3']}
              areas={[
                  ['hobby-title', 'hobby-title', 'hobby-title'],
                  ['hobby-sports', 'hobby-travels', 'hobby-chill'],
                  ['hobby-space', 'hobby-music', 'hobby-party'],
              ]}
              gap="small"
              margin="75px 0 0 0"
        >

            <Box gridArea="hobby-title">
                <Heading className="heading_width" textAlign="center">Mes Loisirs</Heading>
            </Box>

            <Box gridArea="hobby-sports">
                <Image fit="contain"
                       src={image_sports}
                       className="image_max_width_100"
                />
            </Box>

            <Box gridArea="hobby-travels">
                <Image fit="contain"
                       src={image_travels}
                       className="image_max_width_100"
                />
            </Box>

            <Box gridArea="hobby-chill">
                <Image fit="contain"
                       src={image_chill}
                       className="image_max_width_100"
                />
            </Box>

            <Box gridArea="hobby-space">
                <Image fit="contain"
                       src={image_space}
                       className="image_max_width_100"
                />
            </Box>

            <Box gridArea="hobby-music">
                <Image fit="contain"
                       src={image_music}
                       className="image_max_width_100"
                />
            </Box>

            <Box gridArea="hobby-party">
                <Image fit="contain"
                       src={image_party}
                       className="image_max_width_100"
                />
            </Box>

        </Grid>
    );
}

export default MyHobbies;
