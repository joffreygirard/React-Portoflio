import React from 'react';
import './App.css';
import { Grommet, Header, Button, Menu, Box, Text, Heading, Avatar, Footer, Nav, Anchor } from 'grommet';
import { Home, Book, Phone, Info, Workshop, FormDown, Facebook, Instagram, Linkedin, Github,  } from 'grommet-icons';

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
            <Anchor href="#" title="Accueil" hoverIndicator>
                <Avatar margin="0 0 0 20px" size="large" src="https://media-exp1.licdn.com/dms/image/C4D03AQEDtJhDKPW4Aw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=mlNS28FhuTcL5Y0Plxn3QNGdPoz3rz-jBi4dV_3ShNM" />
            </Anchor>

            <Anchor href="#" title="Accueil" hoverIndicator>
                <Heading margin="none" size="small">
                    Portfolio de Joffrey Girard
                </Heading>
            </Anchor>

            <MyMenu/>
        </Header>
    );
}


function MyFooter() {
    return (
        <Footer background="brand" pad="small">
            <Box />
            <Nav direction="row" background="brand" pad="small">
                <Anchor icon={<Facebook />} href="https://fr-fr.facebook.com" title="Facebook" hoverIndicator />
                <Anchor icon={<Instagram />} href="https://www.instagram.com/?hl=fr" title="Instagram" hoverIndicator />
                <Anchor icon={<Linkedin />} href="https://www.linkedin.com/in/joffrey-g-ab2053141/" title="Linkedin" hoverIndicator />
                <Anchor icon={<Github />} href="https://github.com/joffreygirard" title="Github" hoverIndicator />
                <Anchor icon={<Github />} href="https://gitlab.com/joffreygirard" title="GitLab" hoverIndicator />
            </Nav>
            <Box />
        </Footer>
    );
}

function App() {
    return (
        <Grommet className="App" themeMode="dark">
            <MyHeader/>
            <Box height="large" />
            <MyFooter/>
        </Grommet>
    );
}

export default App;
