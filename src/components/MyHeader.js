import React from 'react';
import '../App.css';
import {Anchor, Avatar, Header, Heading} from "grommet";
import MyMenu from "./MyMenu";

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

export default MyHeader;
