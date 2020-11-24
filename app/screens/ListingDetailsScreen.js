import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppText from '../components/Text'
import ListItem from '../components/list/ListItem'
import colors from '../config/colors'

const ListingDetailsScreen = ({ }) => {
    return (

        <View>
            <Image
                style={styles.image}
                source={require("../assets/jacket.jpg")} />
            <View style={styles.detailContainer}>
                <Text style={styles.title} >Red Jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/jacket.jpg")}
                        title="Mayank"
                        subTitle="5 Listing"
                    />
                </View>
            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    detailContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 30
    }
}) 