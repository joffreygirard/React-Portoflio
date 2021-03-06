import React from 'react';
import '../App.css';
import {Heading, Box, Grid, Text, Form, FormField, TextInput, Button, TextArea, Select, ResponsiveContext} from "grommet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";


function MyContact() {

    const size = React.useContext(ResponsiveContext);
    const [value, setValue] = React.useState("Sélectionnez une option");

    return (
        <Box margin="75px 0 75px 0">
            <Heading className="heading_width" textAlign="center">Contactez-moi !</Heading>

            {size === "small" ? (
                <Grid rows={["small"]}
                      columns={['1/1']}
                      areas={[
                          ['contact-address'],
                          ['contact-mail'],
                          ['contact-phone'],
                      ]}
                      gap="small"
                >

                    <Box gridArea="contact-address" direction="column">
                        <Text textAlign="center"><FontAwesomeIcon icon={faMapMarker} size="4x" /></Text>
                        <Box direction="column" margin="30px 0 0 0">
                            <Text textAlign="center">27 Chemin de la Garonne</Text>
                            <Text textAlign="center">31200 TOULOUSE</Text>
                        </Box>
                    </Box>

                    <Box gridArea="contact-mail" direction="column">
                        <Text textAlign="center"><FontAwesomeIcon icon={faEnvelope} size="4x" /></Text>
                        <Text textAlign="center" margin="30px 0 0 0">joffrey.girard2@gmail.com</Text>
                    </Box>

                    <Box gridArea="contact-phone" direction="column">
                        <Text textAlign="center"><FontAwesomeIcon icon={faPhone} size="4x" /></Text>
                        <Text textAlign="center" margin="30px 0 0 0">06.83.65.08.15</Text>
                    </Box>

                </Grid>
                ) : (
                    <Grid rows={["small"]}
                          columns={['1/3']}
                          areas={[
                              ['contact-address', 'contact-mail', 'contact-phone'],
                          ]}
                          gap="small"
                    >

                        <Box gridArea="contact-address" direction="column">
                            <Text textAlign="center"><FontAwesomeIcon icon={faMapMarker} size="4x" /></Text>
                            <Box direction="column" margin="30px 0 0 0">
                                <Text textAlign="center">27 Chemin de la Garonne</Text>
                                <Text textAlign="center">31200 TOULOUSE</Text>
                            </Box>
                        </Box>

                        <Box gridArea="contact-mail" direction="column">
                            <Text textAlign="center"><FontAwesomeIcon icon={faEnvelope} size="4x" /></Text>
                            <Text textAlign="center" margin="30px 0 0 0">joffrey.girard2@gmail.com</Text>
                        </Box>

                        <Box gridArea="contact-phone" direction="column">
                            <Text textAlign="center"><FontAwesomeIcon icon={faPhone} size="4x" /></Text>
                            <Text textAlign="center" margin="30px 0 0 0">06.83.65.08.15</Text>
                        </Box>

                    </Grid>
                )
            }

            <Box margin="30px 10% 30px 10%">
                <Form>
                    <FormField name="name" htmlfor="contact_form_name" label="Nom">
                        <TextInput id="contact_form_name"
                                   name="name"
                                   placeholder="Nom"
                        />
                    </FormField>

                    <FormField name="email" htmlfor="contact_form_email" label="E-mail">
                        <TextInput id="contact_form_email"
                                   name="email"
                                   placeholder="E-mail"
                        />
                    </FormField>

                    <FormField name="subject" htmlFor="contact_form_subject" label="Sujet">
                        <Select
                            id="contact_form_subject"
                            name="subject"
                            options={['Sélectionnez une option', "Demande d'informations supplémentaires", 'Demande de contact', 'Autre']}
                            value={value}
                            onChange={({ option }) => setValue(option)}
                        />
                    </FormField>

                    <FormField name="descritpion" htmlFor="contact_form_description" label="Détails de votre demande">
                        <TextArea
                            id="contact_form_description"
                            placeholder="Entrez les détails de votre demande ici"
                            name="description"
                            resize="vertical"
                            rows="3"
                        />
                    </FormField>

                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Envoyer" color="#000394" />
                    </Box>
                </Form>
            </Box>

        </Box>
    );
}

export default MyContact;
