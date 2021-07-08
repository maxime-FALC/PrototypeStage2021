import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Dashboard from "@/components/Dashboard.vue";
import DashboardPatient from "@/components/DashboardPatient.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
      path : "/dashboardtherapist",
      name : "DashboardTherapist",
      component : Dashboard
  },
  { 
  path : "/dashboardpatient",
  name : "DashboardPatient",
  component : DashboardPatient
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;