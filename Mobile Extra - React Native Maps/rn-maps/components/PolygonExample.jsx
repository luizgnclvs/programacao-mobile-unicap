import { StyleSheet, View } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';

export default function PolygonExample() {
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
					<Polygon
						coordinates={[
							{ latitude: 40.716482, longitude: -74.002778 },
							{ latitude: 40.711350, longitude: -74.005773 },
							{ latitude: 40.719130, longitude: -74.008765 },
							{ latitude: 40.716482, longitude: -74.002778 },
						]}
						fillColor={'rgba(0, 255, 0, 0.3)'}
						strokeColor={'green'}
						strokeWidth={2}
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
