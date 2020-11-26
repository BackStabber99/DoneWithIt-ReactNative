import React, { useEffect, useState } from "react";

import * as Location from 'expo-location'

export default useLocation = async () => {

    const [location, setLocation] = useState()

    const getLocation = async () => {
        try {
            const { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted')
                return
            const coordinates = await Location.getLastKnownPositionAsync({}) || await Location.getCurrentPositionAsync({})
            if (coordinates != null) {
                const { coords: { latitude, longitude } } = coordinates
                await setLocation({ latitude, longitude })
                console.log(latitude, longitude)
            }
            else {
                getLocation()
            }
            // console.log(latitude, longitude)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return location;

}
