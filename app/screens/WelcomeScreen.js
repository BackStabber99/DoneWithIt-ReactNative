import React from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Button from '../components/Button'
import routes from '../navigation/routes'

export default function WelcomeScreen({ navigation }) {
    return (

        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagLine: {
        fontSize: 23,
        fontWeight: "600",
        paddingVertical: 20
    }
})
