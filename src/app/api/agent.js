import axios from "app/api/node_modules/axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response) => response.data;

const request = {
  get: async (url) => await axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Student = {
  listByIdSubject: (idSubject) => request.get(`student/subject/${idSubject}`),
  listByKmean: async (idSubject) =>
    await request.get(`student/chart/${idSubject}`),
  listFPG: async () => await request.get("student/fpg"),
};

export default {
  Student,
};
