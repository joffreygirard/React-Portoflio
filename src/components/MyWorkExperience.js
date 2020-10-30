import React from 'react';
import '../App.css';
import {Box, Grid} from "grommet";

import MyActivityHead from "./MyActivityHead";
import MyActivityContent from "./MyActivityContent";


function MyWorkExperience(props) {

    let company = props.companyDetails;

    let element_head = {
        name: company.name,
        logo: company.logo,
        title: company.positionTitle,
        description: company.positionDescription,
        dateStart: company.dateStart,
        dateEnd: company.dateEnd,
        duration: company.duration,
    };

    let element_content = {
        description: company.jobDescription,
        technologies: company.technologies,
        elementDetails: company.companyDetails,
    };

    return (
            <Grid rows={["auto"]}
                  columns={['40%', 'auto']}
                  areas={[
                      ['work-title', 'work-content'],
                  ]}
                  gap="small"
            >

                <Box gridArea="work-title" background="light-5">
                    <MyActivityHead element_head={element_head} />
                </Box>

                <Box background="light-2" gridArea="work-content">
                    <MyActivityContent element_content={element_content} />
                </Box>

            </Grid>
    );
}

export default MyWorkExperience;
