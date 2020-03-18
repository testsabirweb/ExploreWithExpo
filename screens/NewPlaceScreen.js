import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NewPlacesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>NewPlacesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default NewPlacesScreen