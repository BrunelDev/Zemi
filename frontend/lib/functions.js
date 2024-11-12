import axios from "axios";
const url = "http://192.168.100.2:8000";
const api = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchTodos = async (id) => {
  try {
    const res = await api.get(`/todo/${id}/`);
    return res.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return null;
  }
};

export const fetchText = async (id) => {
  try {
    const res = await fetch(`http://192.168.100.2:8000/todo/${id}/`);

    if (!res.ok) {
      throw new Error(`Erreur HTTP ! Sttut : ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    return null;
  }
};
