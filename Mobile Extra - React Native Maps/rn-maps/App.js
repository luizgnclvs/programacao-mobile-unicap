import { StyleSheet, View } from 'react-native';
import DefaultMarkerExample from './components/DefaultMarkerExample';
import CustomMarkerExample from './components/CustomMarkerExample';
import CalloutExample from './components/CalloutExample';
import PolylineExample from './components/PolylineExample';
import PolygonExample from './components/PolygonExample';
import CircleExample from './components/CircleExample';
import OverlayExample from './components/HeatmapExample';
import HeatmapExample from './components/HeatmapExample';

export default function App() {
	return (
		<View style={styles.container}>
			<DefaultMarkerExample />
			{/* <CustomMarkerExample /> */}
			{/* <CalloutExample /> */}
			{/* <PolylineExample /> */}
			{/* <PolygonExample /> */}
			{/* <CircleExample /> */}
			{/* <HeatmapExample /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: '100%',
		height: '100%',
	},
});
