import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTask } from "../services/TaskService";

export default function TaskInput() {
	const [description, setDescription] = useState("");
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: createTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
		},
	});

	const handleAddTask = () => {
		if (description.trim()) {
			mutation.mutate({ description, done: false });
			setDescription("");
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={text => setDescription(text)}
				value={description}
				placeholder="Digite uma nova tarefa"
			/>
			<TouchableOpacity style={styles.button} onPress={handleAddTask}>
				<Text style={styles.buttonText}>Adicionar Tarefa</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 16,
		paddingHorizontal: 15,
	},
	input: {
		flex: 1,
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginRight: 16,
		paddingHorizontal: 8,
	},
	button: {
		backgroundColor: "blue",
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 4,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});
