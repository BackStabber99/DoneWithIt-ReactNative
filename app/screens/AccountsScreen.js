import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/list/ListItem'
import ListItemSeperator from '../components/list/ListItemSeperator'
import Screen from '../components/Screen'
import colors from '../config/colors'


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
        }
    }

]

export default function AccountsScreen() {
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
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})