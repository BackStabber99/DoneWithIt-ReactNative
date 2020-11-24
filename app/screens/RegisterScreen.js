import React from 'react'
import { StyleSheet, Image } from 'react-native'

import * as Yup from 'yup'

import Screen from '../components/Screen'

import { Form, FormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function RegisterScreen() {

    return (
        <Screen style={styles.container}>


            <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    name="name"//unique identifier
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    icon="account"
                    placeholder="Name"
                    textContentType="emailAddress"
                />

                <FormField
                    name="email"//unique identifier
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    icon="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <FormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton title="Register" />
            </Form>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})