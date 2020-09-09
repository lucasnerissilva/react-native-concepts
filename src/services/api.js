import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export const findRepositories = async () => {
  return api.get("repositories");
};

export const likeRepository = async repositoryId => {
  return api.post(`repositories/${repositoryId}/like`);
};

export default api;
