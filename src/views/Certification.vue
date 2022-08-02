<template>
  <div class="certification-class">
    <div class="flex items-center mt-8">
      <h2 class="intro-y text-lg font-medium mr-auto">Certificación</h2>
    </div>
    <!-- BEGIN: Wizard Layout -->
    <div class="intro-y box py-10 custom-wizard">
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
        </div>
        <div
          class="wizard__line hidden lg:block w-2/3 bg-gray-200 dark:bg-dark-1 absolute mt-5"
        ></div>
      </div>
      <!-- BEGIN: Option 1 -->
      <div
        v-if="option == 1"
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <div class="font-medium text-base">Información</div>
        <div class="grid grid-cols-12 gap-4 row-gap-5">
          <div class="intro-y col-span-12 mt-5">
            <div>
              <p>
                Los clientes buscan profesionales de confianza. Por eso, es
                importante obtener una verificación.
              </p>

              <p class="mt-5">
                Obtendrás beneficios dentro de la app, como el sello de
                seguridad visible y mejor posicionamiento entre los resultados
                de búsqueda.
              </p>
            </div>
          </div>
          <div class="intro-y col-span-12 justify-center sm:justify-end mt-5">
            <div class="font-medium text-base">¿Qué necesitas?</div>
          </div>
          <div class="intro-y col-span-12">
            <div>
              <p>
                El certificado en Llama Profesional es gratis. Solo tienes que
                completar tus datos personales.
              </p>
            </div>
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center mt-5"
          >
            <button
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
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
      >
        <div class="font-medium text-base mb-5">
          Certificado de antecedentes
        </div>
        <div class="grid grid-cols-12 gap-4 row-gap-5">
          <div class="intro-y col-span-12 sm:col-span-6">
            <div>Número de cédula:</div>
            <input
              v-model="form.identification"
              type="text"
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div>Fecha de expedición:</div>
            <input
              v-model="form.expedition_date"
              type="text"
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div>Foto:</div>
            <input
              v-model="form.photo"
              type="text"
              class="input w-full border flex-1"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <div>Información tributaria:</div>
            <input
              v-model="form.tax"
              type="text"
              class="input w-full border flex-1"
            />
          </div>
          <div
            class="intro-y col-span-12 flex items-center justify-center mt-5"
          >
            <button
              class="button w-24 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300"
              @click="previousOption()"
            >
              Anterior
            </button>
            <button
              class="button w-24 justify-center block bg-theme-1 text-white ml-2"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      <!-- END: Option 2 -->
    </div>
    <!-- END: Wizard Layout -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: 1,
      form: {
        identification: null,
        expedition_date: null,
        photo: null,
        tax: null
      }
    };
  },
  methods: {
    changeOption(option) {
      /* this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {} */
      this.option = option;
    },
    nextOption() {
      this.option = this.option + 1;
    },
    previousOption() {
      this.option = this.option - 1;
    }
  }
};
</script>
<style lang="scss">
.certification-class {
  .custom-wizard {
    .option-one.is-active {
      color: white;
      background-color: #1e41aa;
    }
    .option-two.is-active {
      color: white;
      background-color: #1e41aa;
    }
  }
}
</style>
