import React from "react";
import '../App.css';
import {Anchor, Box, Footer, Nav} from "grommet";
import {Facebook, Github, Instagram, Linkedin} from "grommet-icons";

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

export default MyFooter;
