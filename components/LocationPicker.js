import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ActivityIndicator,
    Button
} from 'react-native'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


import { COLORS } from '../constants/Colors';

const LocationPicker = (props) => {
    const [pickedLocation, setPickedLocation] = useState()
    const [isFetching, setIsFetching] = useState(false)

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)

        if (result.status !== 'granted') {
            Alert.alert('Permission Denied',
                'You need to grant the location permission to use this app',
                [{ text: 'OK' }])
            return false
        }
        return true
    }

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            return
        }
        try {
            setIsFetching(true)
            const location = await Location.getCurrentPositionAsync({ timeout: 6000 })
            console.log(location)
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        } catch (err) {
            Alert.alert(
                'Could not fetch location!',
                'Please try again or choose a location on map',
                [{ text: 'OK' }]
            )
        }
        setIsFetching(false)
    }

    return (
        <View style={styles.locationPicker}>
            <View style={styles.mapPreview}>
                {isFetching ?
                    <ActivityIndicator color={COLORS.primary} size='large' /> :
                    <Text style={styles.previewText}>No Location chosen yet...</Text>
                }
            </View>
            <Button
                title='Get User Location'
                color={COLORS.primary}
                onPress={getLocationHandler}
                uppercase={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    previewText: {
        fontFamily: 'open-sans',
        fontSize: 14,
    }
})

export default LocationPicker