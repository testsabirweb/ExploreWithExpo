import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { COLORS } from '../constants/Colors';

const MapScreen = (props) => {
    const [selectedLocation, setSelectedLocation] = useState()

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            return
        }
        props.navigation.navigate('NewPlace', {
            pickedLocation: selectedLocation
        })
    }, [selectedLocation])

    useEffect(() => {
        props.navigation.setParams({
            saveLocation: savePickedLocationHandler
        })
    }, [savePickedLocationHandler])

    const mapRegion = {
        latitude: 37.85,
        longitude: -120.25,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.042
    }
    const selectLocationHandler = (e) => {
        setSelectedLocation({
            lat: e.nativeEvent.coordinate.latitude,
            lng: e.nativeEvent.coordinate.longitude
        })
    }

    let markerCoordinates;
    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    return (
        <MapView
            style={styles.map}
            region={mapRegion}
            onPress={selectLocationHandler}
        >
            {markerCoordinates && <Marker title='Picked Location' coordinate={markerCoordinates}></Marker>}
        </MapView>
    )
}

MapScreen.navigationOptions = navData => {
    const saveFun = navData.navigation.getParam('saveLocation')
    return {
        headerRight: () => {
            return (
                <TouchableOpacity style={styles.headerButton} onPress={saveFun}>
                    <Text style={styles.headerButtonText}>Save</Text>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    map: {
        flex: 1
    },
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: Platform.OS === 'android' ? 'white' : COLORS.primary
    }
})

export default MapScreen