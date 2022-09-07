<template>
  <div class="app-container">
    <div v-if="$store.state.isUserLoggedIn">
      <h1 class="app-header">{{title}}</h1>
      <div class="add-task">
        <input type="text" autocomplete="off" placeholder="Add New Task" v-model="newTask" @keyup.enter="newItem" class="task-input">
        <input type="submit" value="" class="submit-task" @click="newItem" title="Add Task">
      </div>
      <ul class="task-list">
        <li class="task-list-item" v-for="task,idx in tasks" :key="idx">
          <label class="task-list-item-label">
            <input type="checkbox" :checked="task.status" @click="updateStatus(task)">
            <span>{{task.content}}</span>
          </label>
          <span @click="delItem(task)" class="delete-btn" title="Delete Task">{{task.del}}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <h1 class="app-header">{{title}}</h1>
      <p class="app-header">{{detail}}</p>
    </div>
  </div>
</template>

<script>
import TaskServices from "../services/TaskServices"

export default {
  name: 'ToDoList',
  data() {
    return {
      title: this.$store.state.isUserLoggedIn ? 'TO DO LIST' : "Welcome to simple to do list",
      detail: "To use this to do list, you just need to login. That's all.",
      newTask: '',
      tasks: []
    }
	},
	methods: {
		async newItem() {
			const newTask = await TaskServices.createTask({
        content: this.newTask,
        status: false,
        owner: this.$store.state.user.id
      })
      this.tasks.push(newTask.data.task)
      this.newTask = "";
		},
		async delItem(task) {
      await TaskServices.delTask(task.id)
			this.tasks.splice(this.tasks.indexOf(task), 1)
		},
    async updateStatus(task) {
      const result = await TaskServices.updateTask(task.id,{
        content: task.content,
        status: !task.status,
        owner: this.$store.state.user.id
      })

      // console.log("result: ", result)
    }
	},
  async mounted() {
    if (this.$store.state.isUserLoggedIn) {
      this.tasks = (await TaskServices.getTasks(this.$store.state.user.id)).data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
}

.app-container {
  border-radius: 8px;
  width: 100%;
  max-width: 480px;
  max-height: 100%;
  background-color: #10101d;
  padding: 24px;
  overflow: auto;
  margin: auto;
}

.app-header {
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: #fff;
}

.submit-task {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: #ee9ca7;
  color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  background-size: 18px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 rgba(238, 156, 167,0.4);
}

.add-task {
  height: 40px;
  font-size: 14px;
  display: flex;
}

.task-input {
  border-right: none;
  width: 100%;
  padding: 0 4px;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  margin-right: 12px;
  color: #fff;
  box-shadow: none;
  border-radius: 0;
}
/* 
.task-input + placeholder {
  color: #fff;
} */

.task-list-item {
  background-color: #191933;
  border-radius: 4px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 8px;
}

.task-list-item-label > input {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check' stroke='%23fff'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}

.task-list-item-label > input:hover {
  border-color: #ee9ca7;
  box-shadow: 0 0 0 3px rgba(238, 156, 167, 0.2);
}
    
.task-list-item-label > input:checked {
  background-size: 10px;
  border: 1px solid #ee9ca7;
  background-color: #ee9ca7;
}

.task-list-item-label > input:checked + span {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through rgba(255, 255, 255, 0.8);
}

.task-list-item-label {
  display: flex;
  align-items: flex-start;
  color: #fff;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
}

.delete-btn {
  margin-left: auto;
  display: block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff3d46' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}


</style>
