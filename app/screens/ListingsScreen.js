import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Button from '../components/Button'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'

import ActivityIndicator from '../components/ActivityIndicator'

import listingApi from '../api/listings'
import AppText from '../components/Text'


export default function ListingsScreen({ navigation }) {

    const [listings, setListings] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadListings()
    }, [])

    const loadListings = async () => {
        setLoading(true)
        const response = await listingApi.getListings()
        setLoading(false)

        if (!response.ok) return setError(true)

        setError(false)
        setListings(response.data)
    }

    return (
        <Screen style={styles.screen}>
            {
                error &&
                <React.Fragment>
                    <AppText>Couldn't retrieve the listings</AppText>

                    <Button title="Retry" onPress={loadListings} />
                </React.Fragment>
            }
            <ActivityIndicator visible={loading} />

            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }
            />

        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})