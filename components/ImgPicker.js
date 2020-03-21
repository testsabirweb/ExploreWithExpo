import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { COLORS } from '../constants/Colors'

const ImgPicker = (props) => {
    const [pickedImage, setPickedImage] = useState()

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA)

        if (result.status !== 'granted') {
            Alert.alert('Permission Denied',
                'You need to grant the camera permission to use this app',
                [{ text: 'OK' }])
            return false
        }
        return true
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            return
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],//comment this to allow free ratio of image
            quality: 0.5
        })

        setPickedImage(image.uri)
        props.onImageTaken(image.uri)
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (
                    <Text style={styles.previewText}>No Image Picked Yet...</Text>
                ) :
                    (<Image style={styles.image} source={{ uri: pickedImage }} />)
                }
            </View>
            <Button
                title='Take Image'
                color={COLORS.primary}
                onPress={takeImageHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    previewText: {
        fontFamily: 'open-sans',
        fontSize: 14
    }
})

export default ImgPicker