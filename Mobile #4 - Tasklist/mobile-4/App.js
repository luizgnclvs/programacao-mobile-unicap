import { StyleSheet } from 'react-native';
import TaskScreen from './screens/TaskScreen';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TaskScreen />
		</QueryClientProvider>
	);
}
