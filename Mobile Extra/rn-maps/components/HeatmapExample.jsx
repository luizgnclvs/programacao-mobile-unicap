import { StyleSheet, View } from 'react-native';
import MapView, { Heatmap } from 'react-native-maps';

export default function HeatmapExample() {
	const data = [
		{ latitude: 40.711482, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711486, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711489, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711492, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711496, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711499, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711582, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711512, longitude: -74.005778, weight: 1 },
		{ latitude: 40.711473, longitude: -74.005778, weight: 1 },
	];

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
				<Heatmap
					points={data}
					radius={50}
					opacity={1}
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
