import api from "./api-config";

// write a function to get all dogs
export const getAllDogs = async () => {
  const resp = await api.get("/dogs");
  return resp.data;
};
// write a function to get one dog
export const getOneDog = async (id) => {
  const resp = await api.get(`/dogs/${id}`);
  return resp.data;
};
// write a function to create a dog
export const postDog = async (dogData) => {
  const resp = await api.post("/dogs", dogData);
  return resp.data;
};
// write a function to edit a dog
export const putDog = async (id, dogData) => {
  const resp = await api.put(`/dogs/${id}`, dogData);
  return resp.data;
};
// write a function to delete a dog
export const deleteDog = async (id) => {
  const resp = await api.delete(`/dogs/${id}`);
  return resp.data;
};
