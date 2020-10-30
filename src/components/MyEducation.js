import React from 'react';
import '../App.css';
import {Box, Grid, Heading, Image, Button, Text, Layer} from "grommet";

import MyActivityHead from "./MyActivityHead";
import MyActivityContent from "./MyActivityContent";


function MyEducation(props) {

    let school = props.schoolDetails;

    let element_head = {
        name: school.name,
        logo: school.logo,
        title: school.formationLevel,
        description: school.formationTitle,
        dateStart: school.dateStart,
        dateEnd: school.dateEnd,
        duration: school.duration,
    };

    let element_content = {
        description: school.formationDescription,
        technologies: school.technologies,
        elementDetails: school.companyDetails,
    };

    return (
            <Grid rows={["auto"]}
                  columns={['auto', '40%']}
                  areas={[
                      ['work-content', 'work-title'],
                  ]}
                  gap="small"
            >

                <Box background="light-2" gridArea="work-content">
                    <MyActivityContent element_content={element_content} />
                </Box>

                <Box gridArea="work-title" background="light-5">
                    <MyActivityHead element_head={element_head} />
                </Box>

            </Grid>
    );
}

export default MyEducation;
