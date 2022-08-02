import Vue from "vue";
import VueRouter from "vue-router";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../views/Dashboard";
import Certification from "../views/Certification";
import BuyService from "../views/BuyServices";
import RequestService from "../views/RequestService";
import MessageProfessional from "../views/MessageProfessional";
import ProfileProfessional from "../views/ProfileProfessional";
import Services from "../views/Services";
import SearchProfessional from "../views/SearchProfessional";
import Login from "../views/Login";
import Register from "../views/Register";
import ClientRegister from "../views/ClientRegister";
import ErrorPage from "../views/ErrorPage";
import UpdateProfile from "../views/UpdateProfile";
import ChangePassword from "../views/ChangePassword";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "side-menu-dashboard",
        component: Dashboard
      },
      {
        path: "certification",
        name: "side-menu-certification",
        component: Certification
      },
      {
        path: "buy-service",
        name: "side-menu-buy-service",
        component: BuyService
      },
      {
        path: "request-service",
        name: "side-menu-request-service",
        component: RequestService
      },
      {
        path: "message-professional",
        name: "side-menu-message-professional",
        component: MessageProfessional
      },
      {
        path: "profile-professional",
        name: "side-menu-profile-professional",
        component: ProfileProfessional
      },
      {
        path: "services",
        name: "side-menu-services",
        component: Services
      },
      {
        path: "search-professional",
        name: "side-menu-search-professional",
        component: SearchProfessional
      },
      {
        path: "update-profile",
        name: "side-menu-update-profile",
        component: UpdateProfile
      },
      {
        path: "change-password",
        name: "side-menu-change-password",
        component: ChangePassword
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/client-register",
    name: "client-register",
    component: ClientRegister
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage
  },
  {
    path: "/*",
    component: ErrorPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
