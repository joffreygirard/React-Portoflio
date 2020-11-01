import React from 'react';
import '../App.css';
import {Box, Grid, ResponsiveContext} from "grommet";

import MyActivityHead from "./MyActivityHead";
import MyActivityContent from "./MyActivityContent";


function MyEducation(props) {

    const size = React.useContext(ResponsiveContext);

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
        elementLink: school.companyLink,
    };

    return (

        <>
            {size === "small" ? (
                <Grid rows={["auto", "auto"]}
                      columns={['1/1']}
                      areas={[
                          ['work-title'],
                          ['work-content']
                      ]}
                      gap="small"
                >

                    <Box gridArea="work-content">
                        <MyActivityContent element_content={element_content} />
                    </Box>

                    <Box gridArea="work-title" background="#c9caff" className="border_radius_left">
                        <MyActivityHead element_head={element_head} />
                    </Box>

                </Grid>
                ) : (
                    <Grid rows={["auto"]}
                        columns={['auto', '40%']}
                        areas={[
                            ['work-content', 'work-title'],
                        ]}
                        gap="small"
                    >

                        <Box gridArea="work-content">
                            <MyActivityContent element_content={element_content} />
                        </Box>

                        <Box gridArea="work-title" background="#c9caff" className="border_radius_left">
                            <MyActivityHead element_head={element_head} />
                        </Box>

                    </Grid>
                )
            }
        </>
    );
}

export default MyEducation;
