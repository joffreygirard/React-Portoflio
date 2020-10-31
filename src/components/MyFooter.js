import React from "react";
import '../App.css';
import {Anchor, Box, Footer, Nav} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faGithub, faGitlab, faLinkedin} from "@fortawesome/free-brands-svg-icons";


function MyFooter() {
    return (
        <Footer background="brand" pad="small">
            <Box />

            <Nav direction="row" background="brand" pad="small">
                <Anchor icon={<FontAwesomeIcon icon={faFacebookSquare} size="2x" />} href="https://fr-fr.facebook.com" title="Facebook" hoverIndicator />
                <Anchor icon={<FontAwesomeIcon icon={faInstagram} size="2x" />} href="https://www.instagram.com/?hl=fr" title="Instagram" hoverIndicator />
                <Anchor icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />} href="https://www.linkedin.com/in/joffrey-g-ab2053141/" title="Linkedin" hoverIndicator />
                <Anchor icon={<FontAwesomeIcon icon={faGithub} size="2x" />} href="https://github.com/joffreygirard" title="Github" hoverIndicator />
                <Anchor icon={<FontAwesomeIcon icon={faGitlab} size="2x" />} href="https://gitlab.com/joffreygirard" title="GitLab" hoverIndicator />
            </Nav>

            <Box />
        </Footer>
    );
}

export default MyFooter;
