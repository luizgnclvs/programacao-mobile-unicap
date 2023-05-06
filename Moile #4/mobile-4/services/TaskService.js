import axios from "axios";

const instance = axios.create({
	baseURL: "https://parseapi.back4app.com/classes/",
	headers: {
		"X-Parse-Application-Id": "35i1bwqQYqrdQkdJXbq35zo8wNzKQhTEiR4Jnaqm",
		"X-Parse-REST-API-Key": "hGGjHJor5qvIn95CFWemw1mX2238uRtxN45d4dlR",
	},
});

export const getTasks = () => instance.get("Task").then((res) => res.data);

export const updateTask = (task) => {
	return instance.put(`/Task/${task.objectId}`, task, {
		headers: { "Content-Type": "application/json" },
	});
};

export const createTask = (newTask) => {
	return instance.post('/Task', newTask, {
		headers: { "Content-Type": "application/json" },
	});
}

export const deleteTask = (task) => instance.delete(`/Task/${task.objectId}`);
