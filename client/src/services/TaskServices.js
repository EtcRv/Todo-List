import Api from "@/services/Api";

export default {
  createTask(task) {
    return Api().post("createTask", task);
  },
  getTasks(userId) {
    return Api().get(`getTasks/${userId}`);
  },
  delTask(taskId) {
    return Api().delete(`delTask/${taskId}`);
  },
  updateTask(taskId, taskUpdated) {
    return Api().post(`/updateTask/${taskId}`, taskUpdated);
  }
};
