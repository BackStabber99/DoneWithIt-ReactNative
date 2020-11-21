import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

export default function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
        // Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})