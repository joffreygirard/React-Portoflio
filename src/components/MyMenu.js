import React from 'react';
import '../App.css';
import {Box, Menu} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChess, faGraduationCap, faChevronDown, faHome, faLightbulb, faPhone, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function MyMenu() {
    return (
        <Menu plain
              items={[
                  {
                      label: <Box alignSelf="center">Mes Expériences</Box>,
                      onClick: () => {
                          window.location.href='/work-experiences'
                      },
                      icon: (
                          <Box pad="medium">
                              <FontAwesomeIcon icon={faBriefcase} size="lg" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Ma Formation</Box>,
                      onClick: () => {
                          window.location.href='/educations'
                      },
                      icon: (
                          <Box pad="medium">
                              <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Mes Compétences</Box>,
                      onClick: () => {
                          window.location.href='/skills'
                      },
                      icon: (
                          <Box pad="medium">
                              <FontAwesomeIcon icon={faLightbulb} size="lg" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Mes Loisirs</Box>,
                      onClick: () => {
                          window.location.href='/hobbies'
                      },
                      icon: (
                          <Box pad="medium">
                              <FontAwesomeIcon icon={faChess} size="lg" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Me Contacter</Box>,
                      onClick: () => {
                          window.location.href='/contact'
                      },
                      icon: (
                          <Box pad="medium">
                              <FontAwesomeIcon icon={faPhone} size="lg" />
                          </Box>
                      ),
                  },
              ]}
        >
            <Box direction="row" gap="xxsmall" pad="medium">
                <FontAwesomeIcon icon={faHome} size="2x" />
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
            </Box>
        </Menu>
    );
}

export default MyMenu;
