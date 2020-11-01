import React from 'react';
import '../App.css';
import {Box, Grid, ResponsiveContext} from "grommet";

import MyActivityHead from "./MyActivityHead";
import MyActivityContent from "./MyActivityContent";


function MyWorkExperience(props) {

    const size = React.useContext(ResponsiveContext);

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
        elementLink: company.companyLink,
    };

    return (

        <>
            {size === "small" ? (
                <Grid rows={["auto", "auto"]}
                      columns={
                          ['1/1']
                      }
                      areas={[
                          ['work-title'],
                          ['work-content']
                      ]}
                      gap="small"
                >

                    <Box gridArea="work-title" background="#c9caff" className="border_radius_right">
                        <MyActivityHead element_head={element_head} />
                    </Box>

                    <Box gridArea="work-content">
                        <MyActivityContent element_content={element_content} />
                    </Box>

                </Grid>
                ) : (
                    <Grid rows={["auto"]}
                        columns={['40%', 'auto']}
                        areas={[
                            ['work-title', 'work-content'],
                        ]}
                        gap="small"
                    >

                        <Box gridArea="work-title" background="#c9caff" className="border_radius_right">
                            <MyActivityHead element_head={element_head} />
                        </Box>

                        <Box gridArea="work-content">
                            <MyActivityContent element_content={element_content} />
                        </Box>

                    </Grid>
                )
            }
        </>

    );
}

export default MyWorkExperience;
