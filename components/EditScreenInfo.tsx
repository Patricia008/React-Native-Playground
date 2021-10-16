import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
	const [monster, setMonster] = useState('https://app.pixelencounter.com/api/basic/monsters/random')

	// useEffect(() => {
	// 	fetch('https://app.pixelencounter.com/api/basic/monsters/random').then(data => setToggleMonster(data as any))
	// }, [])

	const onClick = () => {
		// fetch('https://app.pixelencounter.com/api/basic/monsters/random').then(data => setMonster(data as any))
		setMonster(`https://coffee.alexflipnote.dev/random?${Math.floor(Math.random() * 100)}`)
	}

	return (
		<View>
			<View>
				<TouchableHighlight style={styles.getStartedContainer} onPress={onClick}>
					<Image
						source={{uri: monster}}
						style={styles.monsterImage}
					/>
				</TouchableHighlight>
				<Text
				style={styles.getStartedText}
				lightColor="rgba(0,0,0,0.8)"
				darkColor="rgba(255,255,255,0.8)">
				Random Coffee images
				</Text>

				{/* <View
				style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
				darkColor="rgba(255,255,255,0.05)"
				lightColor="rgba(0,0,0,0.05)">
				<MonoText>{path}</MonoText>
				</View>

				<Text
				style={styles.getStartedText}
				lightColor="rgba(0,0,0,0.8)"
				darkColor="rgba(255,255,255,0.8)">
				Interesting react-native application
				</Text> */}
			</View>

			{/* <View style={styles.helpContainer}>
				<TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
				<Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
					Tap here if your app doesn't automatically update after making changes
				</Text>
				</TouchableOpacity>
			</View> */}
		</View>
	);
	}

	function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
	);
}

const styles = StyleSheet.create({
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
		marginTop: 10,
	},
	helpContainer: {
		marginTop: 15,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: 'center',
	},
	monsterImage: {
		height: 250,
		width: 250,
	}
});
