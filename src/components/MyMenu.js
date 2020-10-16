import React from 'react';
import '../App.css';
import {Box, Menu} from "grommet";
import {Attraction, Book, FormDown, Home, Info, Phone, Workshop} from "grommet-icons";

function MyMenu() {
    return (
        <Menu plain
              items={[
                  {
                      label: <Box alignSelf="center">Mes Expériences</Box>,
                      onClick: () => {},
                      icon: (
                          <Box pad="medium">
                              <Workshop size="medium" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Ma Formation</Box>,
                      onClick: () => {},
                      icon: (
                          <Box pad="medium">
                              <Book size="medium" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Mes Compétences</Box>,
                      onClick: () => {},
                      icon: (
                          <Box pad="medium">
                              <Info size="medium" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Mes Loisirs</Box>,
                      onClick: () => {},
                      icon: (
                          <Box pad="medium">
                              <Attraction size="medium" />
                          </Box>
                      ),
                  },
                  {
                      label: <Box alignSelf="center">Me Contacter</Box>,
                      onClick: () => {},
                      icon: (
                          <Box pad="medium">
                              <Phone size="medium" />
                          </Box>
                      ),
                  },
              ]}
        >
            <Box direction="row" gap="xxsmall" pad="medium">
                <Home size="large" />
                <FormDown size="large" />
            </Box>
        </Menu>
    );
}

export default MyMenu;
