import React from "react";
import '../App.css';
import {Anchor, Box, Footer, Nav, ResponsiveContext} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faGithub, faGitlab, faLinkedin} from "@fortawesome/free-brands-svg-icons";


function MyFooter() {

    const size = React.useContext(ResponsiveContext);

    return (
        <Footer className="color_theme_dark_blue" pad="small">
            <Box />
            {size === "small" ? (
                <Nav direction="column" pad="small">
                    <Anchor icon={<FontAwesomeIcon icon={faFacebookSquare} size="2x" />} href="https://fr-fr.facebook.com" target="_blank" color="white" title="Facebook" hoverIndicator />
                    <Anchor icon={<FontAwesomeIcon icon={faInstagram} size="2x" />} href="https://www.instagram.com/?hl=fr" target="_blank" color="white" title="Instagram" hoverIndicator />
                    <Anchor icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />} href="https://www.linkedin.com/in/joffrey-g-ab2053141/" target="_blank" color="white" title="Linkedin" hoverIndicator />
                    <Anchor icon={<FontAwesomeIcon icon={faGithub} size="2x" />} href="https://github.com/joffreygirard" target="_blank" color="white" title="Github" hoverIndicator />
                    <Anchor icon={<FontAwesomeIcon icon={faGitlab} size="2x" />} href="https://gitlab.com/joffreygirard" target="_blank" color="white" title="GitLab" hoverIndicator />
                </Nav>

                ) : (
                    <Nav direction="row" pad="small">
                        <Anchor icon={<FontAwesomeIcon icon={faFacebookSquare} size="2x" />} href="https://fr-fr.facebook.com" target="_blank" color="white" title="Facebook" hoverIndicator />
                        <Anchor icon={<FontAwesomeIcon icon={faInstagram} size="2x" />} href="https://www.instagram.com/?hl=fr" target="_blank" color="white" title="Instagram" hoverIndicator />
                        <Anchor icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />} href="https://www.linkedin.com/in/joffrey-g-ab2053141/" target="_blank" color="white" title="Linkedin" hoverIndicator />
                        <Anchor icon={<FontAwesomeIcon icon={faGithub} size="2x" />} href="https://github.com/joffreygirard" target="_blank" color="white" title="Github" hoverIndicator />
                        <Anchor icon={<FontAwesomeIcon icon={faGitlab} size="2x" />} href="https://gitlab.com/joffreygirard" target="_blank" color="white" title="GitLab" hoverIndicator />
                    </Nav>
                )}
            <Box />
        </Footer>
    );
}

export default MyFooter;
