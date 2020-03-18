import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PlacesListScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>PlacesListScreen</Text>
        </View>
    )
}
PlacesListScreen.navigationOptions = {
    headerTitle: 'All places',
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default PlacesListScreen