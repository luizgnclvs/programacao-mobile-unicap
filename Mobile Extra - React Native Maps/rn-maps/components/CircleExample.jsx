import { StyleSheet, View } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

export default function CircleExample() {
	const center = {
		latitude: 40.711482,
		longitude: -74.005778,
	};

	const radius = 2000;

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
				<Circle
					center={center}
					radius={radius}
					strokeColor="red"
					strokeWidth={2}
					fillColor="rgba(255, 0, 0, 0.5)"
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
