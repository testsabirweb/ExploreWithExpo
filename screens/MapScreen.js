import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
const MapScreen = (props) => {
    const mapRegion = {
        latitude: 37.85,
        longitude: -120.25,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.042
    }

    return (
        <MapView style={styles.map} region={mapRegion} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    map: {
        flex: 1
    }
})

export default MapScreen