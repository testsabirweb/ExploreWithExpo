import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PlaceDetailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>PlaceDetailScreen</Text>
        </View>
    )
}

PlaceDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default PlaceDetailScreen