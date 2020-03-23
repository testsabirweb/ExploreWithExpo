import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

import { COLORS } from '../constants/Colors';
import * as placesActions from "../store/actions/places";
import ImgPicker from "../components/ImgPicker";
import LocationPicker from '../components/LocationPicker'

const NewPlaceScreen = (props) => {
    const [titleValue, setTitleValue] = useState('')
    const [selectedImage, setSelectedImage] = useState()
    const [selectedLocation, setSelectedLocation] = useState()

    const dispatch = useDispatch()
    const titleChangeHandler = (text) => {
        setTitleValue(text)
    }
    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation))
        props.navigation.goBack()
    }

    const imageTakenHandler = (imagePath) => {
        setSelectedImage(imagePath)
    }

    const locationPickedHandler = useCallback((location) => {
        setSelectedLocation(location)
    }, [])

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                />
                <ImgPicker onImageTaken={imageTakenHandler} />
                <LocationPicker
                    onLocationPicked={locationPickedHandler}
                    navigation={props.navigation}
                />{
                    //we are passing navigation as a prop because navigation can be available
                    //for screens only.
                }
                <Button title='Save Place' color={COLORS.primary} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Add Place'
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontFamily: 'open-sans',
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
})

export default NewPlaceScreen