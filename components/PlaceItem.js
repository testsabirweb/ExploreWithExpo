import React from 'react'
import {
    View,
    Text,
    Platform,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native'

import { COLORS } from '../constants/Colors';

const PlaceItem = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp onPress={props.onSelect} >
            <View style={styles.PlaceItem}>
                <Image style={styles.image} source={{ uri: props.image }} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.address}>{props.address}</Text>
                </View>
            </View>
        </TouchableCmp>
    )
}

const styles = StyleSheet.create({
    PlaceItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: COLORS.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontFamily: 'open-sans',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16,
        fontFamily: 'open-sans'
    }
})

export default PlaceItem