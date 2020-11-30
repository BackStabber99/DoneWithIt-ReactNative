import React from "react";
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <Image
                style={styles.image}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
                uri={listing.images[0].url}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.price}>${listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/Mayank.jpg")}
                        title="Mayank Jain"
                        subTitle="5 Listings"
                    />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 10,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 20,
    },
});

export default ListingDetailsScreen;
