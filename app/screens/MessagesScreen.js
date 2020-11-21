import React, { useState } from 'react'
import {
    FlatList, View
} from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeperator from '../components/ListItemSeperator'

import Screen from '../components/Screen'

const initalMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require("../assets/jacket.jpg")
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require("../assets/jacket.jpg")
    },
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initalMessages)
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete message
        setMessages(messages.filter(m => m.id !== message.id))
        //delete from server
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)}
                            />
                        }
                    />}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require("../assets/jacket.jpg")
                        },
                    ])
                }}
            />
        </Screen>
    )
}
