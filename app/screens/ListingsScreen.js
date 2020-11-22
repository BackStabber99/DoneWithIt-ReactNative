import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card'


import Screen from '../components/Screen'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red Jacket',
        price: 100,
        image: require("../assets/jacket.jpg")

    },
    {
        id: 2,
        title: 'Couch',
        price: 1000,
        image: require("../assets/couch.jpg")

    }
]

export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})