import { StyleSheet, View } from 'react-native';
import MapView, { Geojson } from 'react-native-maps';

export default function GeojsonExample() {
	const polygon = {
		type: "Feature",
		geometry: {
			type: "Point",
			coordinates: [40.711482, -74.005778]
		}
	};

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
				<Geojson
					geojson={polygon}
					strokeColor="red"
					strokeWidth={2}
					fillColor="green"
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
