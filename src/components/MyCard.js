import React from 'react';
import '../App.css';
import {Box, Button, Image, Text} from "grommet";

function MyCard() {
    return (
        <Box align="center" direction="column" margin="10%">
            <Image
                className="radius-small"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEDtJhDKPW4Aw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=mlNS28FhuTcL5Y0Plxn3QNGdPoz3rz-jBi4dV_3ShNM"
            />

            <Text margin="40px 0 0 0" textAlign="center">
                20 ans, étudiant en développement Web FullStack. Je suis passionné par les métiers du digital et les
                nouvelles technologies. J'adore voyager et je suis très sportif, je fais tout pour atteindre mes
                objectifs. Mes loisirs, le football, la musculation, cinéma, séries, musiques.
            </Text>

            <Button primary
                    margin="40px 0 0 0"
                    label="Contactez moi !"
                    color="#000394"
            />
        </Box>
    );
}

export default MyCard;
