import React from 'react';
import './App.css';
import { Grommet, Header, Button, Menu, Box, Text, Heading, Avatar } from 'grommet';
import { Home, Book, Phone, Info, Workshop, FormDown } from 'grommet-icons';

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

function MyHeader() {

    return (
        <Header background="brand">
            <Avatar margin="0 0 0 20px" size="large" src="https://media-exp1.licdn.com/dms/image/C4D03AQEDtJhDKPW4Aw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=mlNS28FhuTcL5Y0Plxn3QNGdPoz3rz-jBi4dV_3ShNM" />

            <Heading margin="none" size="small">
                Portfolio de Joffrey Girard
            </Heading>

            <MyMenu/>
        </Header>
    );
}

function App() {
    return (
        <Grommet className="App" themeMode="dark">
            <MyHeader/>
        </Grommet>
    );
}

export default App;
