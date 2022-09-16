import Api from "@/services/Api";
import store from "../store/store";
const headers = {
  "x-auth-token": store.getters.getToken
};
export default {
  createTask(task) {
    return Api().post("createTask", task, { headers });
  },
  getTasks(userId) {
    return Api().get(`getTasks/${userId}`, { headers });
  },
  delTask(taskId) {
    return Api().delete(`delTask/${taskId}`, { headers });
  },
  updateTask(taskId, taskUpdated) {
    return Api().post(`/updateTask/${taskId}`, taskUpdated, { headers });
  }
};
