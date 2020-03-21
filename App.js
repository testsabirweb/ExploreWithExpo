import React, { useState } from 'react';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from './store/reducers/places'
import { initDB } from './database/db'

initDB()
	.then(() => {
		console.log('Initialize database successfully')
	})
	.catch(err => {
		console.log('Initialization of database failed')
		console.log(err)
	})

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})
}

const rootReducer = combineReducers({
	places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false)
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setFontLoaded(true)
				}}
			/>
		)
	}
	return (
		<Provider store={store}>
			<PlacesNavigator />
		</Provider>
	);
}