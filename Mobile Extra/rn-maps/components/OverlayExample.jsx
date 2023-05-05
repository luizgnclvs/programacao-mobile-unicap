import { StyleSheet, View } from 'react-native';
import MapView, { Overlay } from 'react-native-maps';

export default function OverlayExample() {
	const image = require('../assets/overlay.png')

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
				<Overlay
					image={image}
					bounds={[
						[40.712216, -74.22655],
						[40.773941, -74.12544],
					]}
					opacity={1.0}
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
