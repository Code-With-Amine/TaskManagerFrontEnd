import { axiosClient } from "../Api/axios";

const userItem = localStorage.getItem("user");
const userId = userItem ? JSON.parse(userItem).id : null;
const token = localStorage.getItem("token");

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

export const fetchTasks = async () => {
  try {
    const res = await axiosClient.get(`/tasks/all/${userId}`, {
      headers,
    });
    return res.data.task;
  } catch (error) {
    console.error("Erreur lors de la récupération des employés:", error);
  }
};

export const finishedTasks = async () => {
  const tasks = await fetchTasks();
  const finishedTasks =
    tasks && tasks.filter((task: any) => task.status === "revoir");
  return finishedTasks;
};
