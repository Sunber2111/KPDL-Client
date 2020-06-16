import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response) => response.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Student = {
  listByIdSubject: (idSubject) => request.get(`student/subject/${idSubject}`),
  listByKmean: (idSubject) => request.get(`student/chart/${idSubject}`),
  listFPG: () => request.get("student/fpg"),
};

const Subject = {
  listSemester: () => request.get("subject/semester"),
  listSubjectBySemesterId: (id) => request.get(`subject/${id}`),
  listClassRoom: (obj) => request.post("subject/classroom", obj),
};

export default {
  Student,
  Subject,
};
