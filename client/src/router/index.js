import Vue from "vue";
import Router from "vue-router";
import TodoList from "@/components/TodoList";
import Register from "@/components/Register/Register.vue";
import Login from "@/components/Login/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TodoList",
      component: TodoList
    },
    {
      path: "/register",
      name: "Register Page",
      component: Register
    },
    {
      path: "/login",
      name: "Login Page",
      component: Login
    }
  ]
});
