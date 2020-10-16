import React from 'react';
import '../App.css';
import {Box, Button, Image, Text} from "grommet";

function MyCard() {
    return (
        <Box align="center" direction="column" margin="75px">
            <Image
                className="radius-small"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEDtJhDKPW4Aw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=mlNS28FhuTcL5Y0Plxn3QNGdPoz3rz-jBi4dV_3ShNM"
            />

            <Text margin="30px 0 0 0" textAlign="center">
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour
                calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que
                la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </Text>

            <Button primary
                    margin="30px 0 0 0"
                    label="Contactez moi !"
            />
        </Box>
    );
}

export default MyCard;
