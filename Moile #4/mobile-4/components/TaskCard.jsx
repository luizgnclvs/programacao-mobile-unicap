import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";

export default function TaskCard({ task, taskDoneChange, taskDelete}) {
	const handleChange = () => {
		taskDoneChange({ objectId: task.objectId, done: !task.done });
	};

	const handleDeleteTask = (task) => {
		taskDelete(task);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{task.description}</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text>{task.done ? "FEITA" : "A FAZER"}</Text>
				<Switch value={task.done} onValueChange={handleChange} />
				<TouchableOpacity
						style={[styles.button, styles.buttonDelete]}
						onPress={handleDeleteTask}
					>
						<Text style={styles.buttonText}>Excluir</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 60,
		backgroundColor: "#FFF",
		borderColor: "#CCC",
		borderWidth: 2,
		borderRadius: 8,
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	text: {
		fontSize: 16,
	},
});
