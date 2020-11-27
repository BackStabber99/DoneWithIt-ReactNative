import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/lists/ListItem'
import ListItemSeperator from '../components/lists/ListItemSeperator'
import Screen from '../components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'


const menuItem = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    }, {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }

]

export default function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mayank"
                    subTitle="jainmayank16041999@gmail.com"
                    image={require("../assets/jacket.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList

                    data={menuItem}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) =>

                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }

                />

            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor='#ffe66d' />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})