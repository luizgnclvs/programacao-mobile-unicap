import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import TaskCard from "../components/TaskCard";
import { getTasks, updateTask } from "../services/TaskService";
import TaskInput from "../components/TaskInput";

export default function TaskScreen() {
	const queryClient = useQueryClient();
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["tasks"],
		queryFn: getTasks,
	});

	const mutation = useMutation({
		mutationFn: updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
		},
	});

	if (isLoading) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Loading</Text>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Error: {error.message}</Text>
			</View>
		);
	}

	return (
		<View
			style={{
				flex: 1,
				paddingTop: 50,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<TaskInput />
			{isFetching && <Text>IS FETCHING</Text>}
			<FlatList
				style={{ flex: 1 }}
				data={data.results}
				keyExtractor={(item) => item.objectId}
				renderItem={({ item }) => (
					<TaskCard
						task={item}
						taskDoneChange={mutation.mutate}
					/>
				)}
			/>
		</View>
	);
}