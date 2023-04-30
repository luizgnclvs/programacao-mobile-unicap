import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Text } from 'react-native';

export default function CustomMarkerExample() {
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
						title={'New York'}
						description={'A cidade mais legal do mundo!'}
					>
						<View style={{backgroundColor: "red", padding: 10, }}>
							<Text>NY</Text>
						</View>
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
});
