import React from 'react';
import '../App.css';
import {Avatar, Header, Heading} from "grommet";
import {Link} from "react-router-dom";
import MyMenu from "./MyMenu";

function MyHeader() {
    return (
        <Header className="color_theme_dark_blue">
            <Link to="/">
                <Avatar margin="0 0 0 20px" size="large" src="https://media-exp1.licdn.com/dms/image/C4D03AQEDtJhDKPW4Aw/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=mlNS28FhuTcL5Y0Plxn3QNGdPoz3rz-jBi4dV_3ShNM" />
            </Link>

            <Heading margin="none" size="small">
                Joffrey Girard
            </Heading>

            <MyMenu/>
        </Header>
    );
}

export default MyHeader;
