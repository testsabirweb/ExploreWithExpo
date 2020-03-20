import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'

const PlacesListScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>PlacesListScreen</Text>
        </View>
    )
}
PlacesListScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'All places',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Add Place'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={()=>{
                        navData.navigation.navigate('NewPlace')
                    }}
                />
            </HeaderButtons>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default PlacesListScreen