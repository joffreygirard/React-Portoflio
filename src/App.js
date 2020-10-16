import React from 'react';
import './App.css';
import { Grommet, Image, Header, Button, Menu, Box, Text, Heading, Avatar, Footer, Nav, Anchor, Card, CardFooter, CardBody, CardHeader } from 'grommet';
import { Home, Book, Phone, Info, Workshop, FormDown, Facebook, Instagram, Linkedin, Github, Attraction } from 'grommet-icons';

import MyHeader from "./components/MyHeader";
import MyCard from "./components/MyCard";
import MyFooter from "./components/MyFooter";


function App() {
    return (
        <Grommet themeMode="dark">
            <MyHeader/>
            <MyCard/>
            <MyFooter/>
        </Grommet>
    );
}

export default App;
