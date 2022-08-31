<template>
  <div class="register-page">
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
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
              sign up to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-4 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-full"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Registrarse
            </h2>
            <!-- BEGIN: Wizard Layout -->
            <div class="intro-y box py-3 custom-wizard">
              <div
                class="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-10"
              >
                <div class="flex justify-center">
                  <button
                    class="intro-y w-10 h-10 rounded-full button mx-2 bg-gray-200 text-gray-600 option-one"
                    :class="{ 'is-active': option == 1 }"
                    @click="changeOption(1)"
                  >
                    1
                  </button>
                  <button
                    class="intro-y w-10 h-10 rounded-full button mx-2 bg-gray-200 text-gray-600 option-two"
                    :class="{ 'is-active': option == 2 }"
                    @click="changeOption(2)"
                  >
                    2
                  </button>
                  <button
                    class="intro-y w-10 h-10 rounded-full button mx-2 bg-gray-200 text-gray-600 option-three"
                    :class="{ 'is-active': option == 3 }"
                    @click="changeOption(3)"
                  >
                    3
                  </button>
                </div>
                <div
                  class="wizard__line hidden lg:block w-2/3 bg-gray-200 dark:bg-dark-1 absolute mt-5"
                ></div>
              </div>
              <!-- BEGIN: Option 1 -->
              <div
                v-if="option == 1"
                class="px-5 sm:px-20 mt-10 pt-3 border-t border-gray-200 dark:border-dark-5"
              >
                <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                  <div class="col-span-12 sm:col-span-6">
                    <div>E-mail:</div>
                    <input
                      v-model="form.mail"
                      type="email"
                      class="input w-full border flex-1"
                      :class="{ 'border-red-500': $v.form.mail.$error }"
                    />
                    <template v-if="$v.form.mail.$error">
                      <div
                        v-if="!$v.form.mail.required"
                        class="font-medium text-xs text-red-500 mt-1 ml-1"
                      >
                        Digite el E-mail
                      </div>
                    </template>
                  </div>
                  <div class="col-span-12 sm:col-span-6">
                    <div>Nombres y Apellidos:</div>
                    <input
                      v-model="form.names"
                      type="text"
                      class="input w-full border flex-1"
                      :class="{
                        'border-red-500': $v.form.names.$error
                      }"
                    />
                    <template v-if="$v.form.names.$error">
                      <div
                        v-if="!$v.form.names.required"
                        class="font-medium text-xs text-red-500 mt-1 ml-1"
                      >
                        Digite Nombres y apellidos
                      </div>
                    </template>
                  </div>
                  <div class="col-span-12 sm:col-span-6">
                    <div>Nacimiento:</div>
                    <LitePicker
                      v-model="form.birthdate"
                      :options="{
                        autoApply: false,
                        lang: 'es-ES',
                        showWeekNumbers: true,
                        /* minDate: new Date(), */
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true
                        }
                      }"
                      class="input w-full border block mr-auto"
                    />
                    <template v-if="$v.form.birthdate.$error">
                      <div
                        v-if="!$v.form.birthdate.required"
                        class="font-medium text-xs text-red-500 mt-1 ml-1"
                      >
                        Digite la fecha de cumpleaños
                      </div>
                    </template>
                  </div>
                  <div class="col-span-12 sm:col-span-6">
                    <div>Telefono:</div>
                    <input
                      v-model="form.phone"
                      type="text"
                      class="input w-full border flex-1"
                      :class="{ 'border-red-500': $v.form.phone.$error }"
                    />
                    <template v-if="$v.form.phone.$error">
                      <div
                        v-if="!$v.form.phone.required"
                        class="font-medium text-xs text-red-500 mt-1 ml-1"
                      >
                        Digite el Telefono
                      </div>
                    </template>
                  </div>
                  <div class="col-span-12 sm:col-span-6">
                    <label>Genero</label>
                    <div>
                      <TailSelect
                        v-model="form.gender"
                        :options="{
                          search: true,
                          classNames: 'w-full'
                        }"
                      >
                        <option value="null">Seleccione</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                      </TailSelect>
                    </div>
                  </div>
                  <div
                    class="col-span-12 flex items-center justify-center sm:justify-end mt-5"
                  >
                    <button
                      v-if="option != 1"
                      class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                      @click="previousOption()"
                    >
                      Anterior
                    </button>
                    <button
                      v-if="option != 3"
                      class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                      @click="nextOption()"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
              <!-- END: Option 1 -->
              <!-- BEGIN: Option 2 -->
              <div
                v-if="option == 2"
                class="px-5 sm:px-20 mt-10 pt-3 border-t border-gray-200 dark:border-dark-5"
              >
                <div>
                  <div class="mb-4">
                    <div class="mb-2">Educación:</div>
                    <a
                      href="javascript:;"
                      class="intro-y h-10 button mx-2 bg-green-200 text-green-600"
                      data-toggle="modal"
                      data-target="#modal-estudio"
                    >
                      Agregar
                    </a>
                  </div>
                  <div>
                    <div class="overflow-x-auto">
                      <table class="table mb-5">
                        <thead>
                          <tr class="bg-gray-200 text-gray-700">
                            <th
                              class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                            >
                              #
                            </th>
                            <th
                              class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                            >
                              Institucion
                            </th>
                            <th
                              class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                            >
                              Programa
                            </th>
                            <th
                              class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                            >
                              Semestres
                            </th>
                            <th
                              class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                            >
                              Fecha Terminación
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border-b dark:border-dark-5">1</td>
                            <td class="border-b dark:border-dark-5">
                              Universidad UNO
                            </td>
                            <td class="border-b dark:border-dark-5">
                              Ingenieria UNO
                            </td>
                            <td class="border-b dark:border-dark-5">
                              10
                            </td>
                            <td class="border-b dark:border-dark-5">
                              30-03-2012
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div id="modal-estudio" class="modal">
                      <div class="modal__content ">
                        <div
                          class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
                        >
                          <h2 class="font-medium text-base mr-auto">
                            Agregar Estudio
                          </h2>
                        </div>
                        <div class="p-5 grid grid-cols-12 gap-4 row-gap-5">
                          <div class="col-span-12">
                            <label>Institución</label>
                            <div>
                              <TailSelect
                                v-model="form.university"
                                :options="{
                                  search: true,
                                  classNames: 'w-full'
                                }"
                              >
                                <option value="null">Seleccione</option>
                                <option value="1">Universidad UNO</option>
                                <option value="2">Universidad DOS</option>
                              </TailSelect>
                            </div>
                          </div>
                          <div class="col-span-12">
                            <label>Programa</label>
                            <div>
                              <TailSelect
                                v-model="form.program"
                                :options="{
                                  search: true,
                                  classNames: 'w-full'
                                }"
                              >
                                <option value="null">Seleccione</option>
                                <option value="1">Ingenieria UNO</option>
                                <option value="2">Ingenieria DOS</option>
                              </TailSelect>
                            </div>
                          </div>
                          <div class="col-span-12 sm:col-span-6">
                            <div>Semestres:</div>
                            <input
                              v-model="form.quantity"
                              type="number"
                              class="input w-full border flex-1"
                            />
                          </div>
                          <div class="col-span-12 sm:col-span-6">
                            <div>Fecha de Terminación:</div>
                            <LitePicker
                              v-model="form.finallyStudy"
                              :options="{
                                autoApply: false,
                                lang: 'es-ES',
                                showWeekNumbers: true,
                                /* minDate: new Date(), */
                                dropdowns: {
                                  minYear: 1990,
                                  maxYear: null,
                                  months: true,
                                  years: true
                                }
                              }"
                              class="input w-full border block mr-auto"
                            />
                          </div>
                          <div
                            class="col-span-12 flex items-center justify-center sm:justify-end mt-5"
                          >
                            <button
                              class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                              @click="hideModal()"
                            >
                              Cancelar
                            </button>
                            <button
                              class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                              @click="hideModal()"
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Otros cursos:</div>
                      <input
                        v-model="form.other"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Registro de experiencia:</div>
                      <input
                        v-model="form.expirence"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Empresa o independiente:</div>
                      <input
                        v-model="form.labor_type"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Cargo o labor:</div>
                      <input
                        v-model="form.position"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Actividades a realizar:</div>
                      <input
                        v-model="form.activity"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Valor hora:</div>
                      <input
                        v-model="form.hour_valor"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Perfil profesional:</div>
                      <input
                        v-model="form.profile"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Logros alcanzados:</div>
                      <input
                        v-model="form.logros"
                        type="text"
                        class="input w-full border flex-1"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-8"
                >
                  <button
                    v-if="option != 1"
                    class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                    @click="previousOption()"
                  >
                    Anterior
                  </button>
                  <button
                    v-if="option != 3"
                    class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                    @click="nextOption()"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <!-- END: Option 2 -->
              <!-- BEGIN: Option 3 -->
              <div
                v-if="option == 3"
                class="px-5 sm:px-20 mt-10 pt-3 border-t border-gray-200 dark:border-dark-5"
              >
                <div>
                  <div class="grid grid-cols-12 gap-4 row-gap-5 mt-5">
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Usuario:</div>
                      <input
                        v-model="form.username"
                        type="text"
                        class="input w-full border flex-1"
                        :class="{
                          'border-red-500': $v.form.username.$error
                        }"
                      />
                      <template v-if="$v.form.username.$error">
                        <div
                          v-if="!$v.form.username.required"
                          class="font-medium text-xs text-red-500 mt-1 ml-1"
                        >
                          Digite el Nombre de usuario
                        </div>
                      </template>
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Contraseña:</div>
                      <input
                        v-model="form.password"
                        type="password"
                        class="input w-full border flex-1"
                        :class="{
                          'border-red-500': $v.form.password.$error
                        }"
                      />
                      <template v-if="$v.form.password.$error">
                        <div
                          v-if="!$v.form.password.required"
                          class="font-medium text-xs text-red-500 mt-1 ml-1"
                        >
                          Digite la Contraseña
                        </div>
                      </template>
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Confirmar Contraseña:</div>
                      <input
                        v-model="form.confirmPassword"
                        type="password"
                        class="input w-full border flex-1"
                      />
                      <!-- <template v-if="$v.form.confirmPassword.$error">
                        <div
                          v-if="!$v.form.confirmPassword.required"
                          class="font-medium text-xs text-red-500 mt-1 ml-1"
                        >
                          Digite la Confirmacón de la Contraseña
                        </div>
                      </template> -->
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Días a laborar:</div>
                      <input
                        v-model="form.days"
                        type="text"
                        class="input w-full border flex-1"
                        :class="{
                          'border-red-500': $v.form.days.$error
                        }"
                      />
                      <template v-if="$v.form.days.$error">
                        <div
                          v-if="!$v.form.days.required"
                          class="font-medium text-xs text-red-500 mt-1 ml-1"
                        >
                          Digite los Días
                        </div>
                      </template>
                    </div>
                    <div
                      class="intro-y col-span-12 sm:col-span-6 md:col-span-3"
                    >
                      <div class="mb-2">Horario:</div>
                      <input
                        v-model="form.horary"
                        type="text"
                        class="input w-full border flex-1"
                        :class="{
                          'border-red-500': $v.form.horary.$error
                        }"
                      />
                      <template v-if="$v.form.horary.$error">
                        <div
                          v-if="!$v.form.horary.required"
                          class="font-medium text-xs text-red-500 mt-1 ml-1"
                        >
                          Digite el Horario
                        </div>
                      </template>
                    </div>
                    <div class="col-span-12">
                      <input
                        id="vertical-remember-me"
                        type="checkbox"
                        class="input border mr-2"
                      />
                      <label
                        class="cursor-pointer select-none"
                        for="vertical-remember-me"
                        >Acepto términos y condiciones de uso del sitio web y la
                        política de privacidad
                      </label>
                    </div>
                  </div>
                  <div
                    class="intro-y col-span-12 flex items-center justify-center sm:justify-start mt-8"
                  >
                    <button
                      class="button md:w-auto w-full justify-center block bg-theme-3 text-white"
                    >
                      Finalizar e ingresar
                    </button>
                  </div>
                </div>
                <div
                  class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-8"
                >
                  <button
                    v-if="option != 1"
                    class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
                    @click="previousOption()"
                  >
                    Anterior
                  </button>
                  <button
                    v-if="option != 3"
                    class="button w-24 justify-center block bg-theme-1 text-white ml-2"
                    @click="nextOption()"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
              <!-- END: Option 3 -->
            </div>
            <!-- END: Wizard Layout -->
          </div>
        </div>
        <!-- END: Register Form -->
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import {
  required
  /*maxLength,
   sameAs */
} from "vuelidate/lib/validators"; /* importamos las propiedades de la validación */

export default {
  components: {
    DarkModeSwitcher
  },
  data() {
    return {
      option: 1,
      form: {
        mail: null,
        names: null,
        birthdate: "",
        gender: "null",
        phone: null,
        education: null,
        other: null,
        expirence: null,
        labor_type: null,
        position: null,
        activity: null,
        hour_valor: null,
        profile: null,
        logros: null,
        username: null,
        password: null,
        terms: null,
        days: null,
        horary: [],
        university: "null",
        Program: "null",
        finallyStudy: "",
        quantity: 0
      },
      sending: false
    };
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  },
  validations() {
    if (this.option == 1) {
      let form = {
        form: {
          mail: {
            required
          },
          names: {
            required
          },
          birthdate: {
            required
          },
          gender: {
            required
          },
          phone: {
            required
          }
        }
      };
      return form;
    } else if (this.option == 3) {
      let form = {
        form: {
          username: {
            required
          },
          password: {
            required
          },
          days: {
            required
          },
          horary: {
            required
          }
        }
      };
      return form;
    }
  },
  methods: {
    hideModal() {
      cash("#modal-estudio").modal("hide");
    },
    changeOption(option) {
      /* this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {} */
      this.option = option;
    },
    nextOption() {
      if (this.option < 5) {
        this.option = this.option + 1;
      }
    },
    previousOption() {
      if (this.option > 1) {
        this.option = this.option - 1;
      }
    }
    /* sendform() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.sending = true;
        this.axios({
          method: "put",
          url: `buildings/${this.building.id}`,
          data: this.form
        })
          .then(res => {
            console.log(res);
            setTimeout(() => {
              this.$swal({
                icon: "success",
                title: res.data.message,
                showConfirmButton: true,
                timer: 2000
              });
              this.sending = false;
              //this.$swal("Hello Vue world!!!");
            }, 1000);
          })
          .catch(err => {
            console.error(err);
          });
      }
    }, */
  }
};
</script>
<style lang="scss">
.register-page {
  .custom-wizard {
    .option-one.is-active {
      color: white;
      background-color: #1e41aa;
    }
    .option-two.is-active {
      color: white;
      background-color: #1e41aa;
    }
    .option-three.is-active {
      color: white;
      background-color: #1e41aa;
    }
    .option-four.is-active {
      color: white;
      background-color: #1e41aa;
    }
    .option-five.is-active {
      color: white;
      background-color: #1e41aa;
    }
    .parking-select-invalid {
      .tail-select {
        .select-label {
          border: 1px solid red;
        }
      }
    }
  }
}
</style>
