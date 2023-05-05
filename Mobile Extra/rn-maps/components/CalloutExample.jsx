import { StyleSheet, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Text } from 'react-native';

export default function CalloutExample() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 40.711482,
					longitude: -74.005778,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					coordinate={{ latitude: 40.711482, longitude: -74.005778 }}
				>
					<Callout>
						<View>
							<Text style={styles.calloutTitle}>New York</Text>
							<Text style={styles.calloutDescription}>É possível customizar cards manualmente!</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	calloutTitle: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	calloutDescription: {
		fontSize: 14,
	},
});
