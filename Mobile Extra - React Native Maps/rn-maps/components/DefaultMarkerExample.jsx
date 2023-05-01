import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function DefaultMarkerExample() {
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
				/>
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
