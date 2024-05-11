import { axiosClient } from "../Api/axios";

const userItem = localStorage.getItem("user");
const userId = userItem ? JSON.parse(userItem).id : null;
const token = localStorage.getItem("token");

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
};

export const fetchData = async () => {
  try {
    const res = await axiosClient.get(`/tasks/tasksStatictis/${userId}`, {
      headers,
    });
    return {
      OverDeadLine: res.data.OverDeadLine.number,
      finishedTask: res.data.finishedTask.number,
      unFinishedTask: res.data.unFinishedTask.number,
      numberOfTasks: res.data.numberOfTasks,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques:", error);
  }
};
