const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Dashboard"
      },
      "devider",
      {
        icon: "LayoutIcon",
        pageName: "side-menu-layout",
        title: "Pages",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-certification",
            title: "Certification"
          },
          {
            icon: "",
            pageName: "side-menu-buy-service",
            title: "Buy Service"
          },
          {
            icon: "",
            pageName: "side-menu-request-service",
            title: "Request Service"
          },
          {
            icon: "",
            pageName: "side-menu-message-professional",
            title: "Message Professional"
          },
          {
            icon: "",
            pageName: "side-menu-search-professional",
            title: "Search Professional"
          },
          {
            icon: "",
            pageName: "side-menu-profile-professional",
            title: "Profile Professional"
          },
          {
            icon: "",
            pageName: "services",
            title: "Services"
          },
          {
            icon: "",
            pageName: "login",
            title: "Login"
          },
          {
            icon: "",
            pageName: "register",
            title: "Register"
          },
          {
            icon: "",
            pageName: "client-register",
            title: "Client Register"
          },
          {
            icon: "",
            pageName: "error-page",
            title: "Error Page"
          },
          {
            icon: "",
            pageName: "side-menu-update-profile",
            title: "Update profile"
          },
          {
            icon: "",
            pageName: "side-menu-change-password",
            title: "Change Password"
          }
        ]
      }
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
