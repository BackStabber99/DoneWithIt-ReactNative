import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import ImageInput from './ImageInput'

export default function ImageInputList({
    imageUris = [],
    onRemoveImage,
    onAddImage
}) {

    const scrollView = useRef()//ref hook created

    return (
        <View>
            <ScrollView
                // style={{ backgroundColor: 'yellow' }}
                ref={scrollView}//ref set here
                horizontal={true}
                onContentSizeChange={() =>
                    scrollView.current.scrollToEnd()//scroll ref set to end
                }
            >
                <View style={styles.container}>
                    {imageUris.map((uri) =>
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                key={uri}
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    )}
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10
    }
})