<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="require(`@/assets/images/logo.svg`)"
            />
            <span class="text-white text-lg ml-3">
              Mid<span class="font-medium">One</span>
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              A few more clicks to <br />
              sign in to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Ingresar
            </h2>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button class="button text-white bg-theme-1 mr-3 align-top">
                Cliente
              </button>
              <button class="button text-white bg-theme-1 align-top">
                Profesional
              </button>
            </div>
            <div class="intro-x mt-8">
              <input
                type="text"
                class="intro-x login__input input input--lg border border-gray-300 block"
                placeholder="Usuario"
              />
              <input
                type="password"
                class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                placeholder="Contraseña"
              />
            </div>
            <div
              class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4"
            >
              <div class="flex items-center mr-auto">
                <input
                  id="remember-me"
                  type="checkbox"
                  class="input border mr-2"
                />
                <label class="cursor-pointer select-none" for="remember-me"
                  >Recordarme</label
                >
              </div>
              <a href="">Olvide mi contraseña</a>
            </div>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button
                class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top"
              >
                Ingresar
              </button>
              <button
                class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"
              >
                Registrarse
              </button>
            </div>
            <div
              class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left"
            >
              Parar ingresar, debes aceptar nuestros<br />
              <a class="text-theme-1 dark:text-theme-10" href=""
                >Terminos y Condiciones</a
              >
              &
              <a class="text-theme-1 dark:text-theme-10" href=""
                >Politicas de privacidad</a
              >
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitcher from "@/components/DarkModeSwitcher";

export default {
  components: {
    DarkModeSwitcher
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  }
};
</script>
