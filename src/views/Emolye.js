import axios from "axios";

const API_URL = "https://localhost:7082/api/Employees"; // رابط الـ API الفعلي

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  search(query) {
    return axios.get(`${API_URL}/search/${query}`);
  },
  create(employee) {
    return axios.post(API_URL, employee);
  },
  update(id, employee) {
    return axios.put(`${API_URL}/${id}`, employee);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
///////////php artisan migrate:fresh --seed
