import React from 'react';
import '../App.css';
import {Heading, Box, Grid, Text, Form, FormField, TextInput, Button, TextArea, Select} from "grommet";
import {Map, Phone, MailOption} from "grommet-icons";


function MyContact() {

    //const [value, setValue] = React.useState({});

    return (
        <Box>
            <Heading textAlign="center">Contactez-moi !</Heading>

            <Grid rows={["small"]}
                  columns={['1/3']}
                  areas={[
                      ['contact-address', 'contact-mail', 'contact-phone'],
                  ]}
                  gap="small"
            >

                <Box gridArea="contact-address" background="light-2" direction="column">
                    <Text textAlign="center"><Map/></Text>
                    <Text textAlign="center">27 Chemin de la Garonne 31200 TOULOUSE</Text>
                </Box>

                <Box gridArea="contact-mail" background="light-2" direction="column">
                    <Text textAlign="center"><MailOption/></Text>
                    <Text textAlign="center">joffrey.girard2@gmail.com</Text>
                </Box>

                <Box gridArea="contact-phone" background="light-2" direction="column">
                    <Text textAlign="center"><Phone/></Text>
                    <Text textAlign="center">06.83.65.08.15</Text>
                </Box>

            </Grid>

            <Box margin="30px 10% 30px 10%">
                <Form
                    /*value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={({ value }) => {}}*/
                >
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
                            options={['Sélectionnez une option', 'small', 'medium', 'large']}
                            /*value={value}
                            onChange={({ option }) => setValue(option)}*/
                        />
                    </FormField>

                    <FormField name="descritpion" htmlFor="contact_form_description" label="Détails de votre demande">
                        <TextArea
                            id="contact_form_description"
                            placeholder="Entrez les détails de votre demande ici"
                            name="description"
                            resize="vertical"
                            rows="3"
                            /*value={value}
                            onChange={event => setValue(event.target.value)}*/
                        />
                    </FormField>

                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Envoyer" />
                    </Box>
                </Form>
            </Box>

        </Box>
    );
}

export default MyContact;