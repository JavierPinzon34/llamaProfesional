<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Perfil de Usuario</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5">
          <div class="relative flex items-center p-5">
            <div class="w-12 h-12 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium text-base">
                {{ $f()[0].users[0].name }}
              </div>
              <div class="text-gray-600">{{ $f()[0].jobs[0] }}</div>
            </div>
            <div class="dropdown">
              <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
              </a>
              <div class="dropdown-box w-56">
                <div class="dropdown-box__content box dark:bg-dark-1">
                  <div
                    class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                  >
                    Exportar
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ActivityIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Ingles
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <LayoutIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Espa??ol
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <SidebarIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Italiano
                    </a>
                  </div>
                  <div
                    class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                  >
                    <button
                      type="button"
                      class="button button--sm bg-theme-1 text-white"
                    >
                      Configuraci??n
                    </button>
                    <button
                      type="button"
                      class="button button--sm bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300 ml-auto"
                    >
                      Ver Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a
              class="flex items-center text-theme-1 dark:text-theme-10 font-medium"
              href=""
            >
              <ActivityIcon class="w-4 h-4 mr-2" /> Informaci??n Personal
            </a>
            <!-- <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" /> Account Settings
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" /> Change Password
            </a>
            <a class="flex items-center mt-5" href="">
              <SettingsIcon class="w-4 h-4 mr-2" /> User Settings
            </a> -->
          </div>
          <!-- <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a class="flex items-center" href="">
              <ActivityIcon class="w-4 h-4 mr-2" /> Email Settings
            </a>
            <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" /> Saved Credit Cards
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" /> Social Networks
            </a>
            <a class="flex items-center mt-5" href="">
              <SettingsIcon class="w-4 h-4 mr-2" /> Tax Information
            </a>
          </div> -->
          <!-- <div class="p-5 border-t flex dark:border-dark-5">
            <button
              type="button"
              class="button button--sm block bg-theme-1 text-white"
            >
              New Group
            </button>
            <button
              type="button"
              class="button button--sm border text-gray-700 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 ml-auto"
            >
              New Quick Link
            </button>
          </div> -->
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Display Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Mostrar Informaci??n</h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-4">
                <div
                  class="border border-gray-200 dark:border-dark-5 rounded-md p-5"
                >
                  <div
                    class="w-40 h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                  >
                    <img
                      class="rounded-md"
                      alt="Midone Tailwind HTML Admin Template"
                      :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                    />
                    <Tippy
                      tag="div"
                      content="Remove this profile photo?"
                      class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                    >
                      <xIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                  <div class="w-40 mx-auto cursor-pointer relative mt-5">
                    <button
                      type="button"
                      class="button w-full bg-theme-1 text-white"
                    >
                      Cambiar Foto
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 xl:col-span-8">
                <div>
                  <label>Nombre</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Ingrese Dato"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <!-- <div class="mt-3">
                  <label>Nearest MRT Station</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="select"
                      :options="{
                        search: true,
                        classNames: 'w-full'
                      }"
                    >
                      <option value="1">Admiralty</option>
                      <option value="2">Aljunied</option>
                      <option value="3">Ang Mo Kio</option>
                      <option value="4">Bartley</option>
                      <option value="5">Beauty World</option>
                    </TailSelect>
                  </div>
                </div> -->
                <div class="mt-3">
                  <label>C??digo Postal</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="select"
                      :options="{
                        search: true,
                        classNames: 'w-full'
                      }"
                    >
                      <option value="1"
                        >018906 - 1 STRAITS BOULEVARD SINGA...</option
                      >
                      <option value="2"
                        >018910 - 5A MARINA GARDENS DRIVE...</option
                      >
                      <option value="3"
                        >018915 - 100A CENTRAL BOULEVARD...</option
                      >
                      <option value="4"
                        >018925 - 21 PARK STREET MARINA...</option
                      >
                      <option value="5"
                        >018926 - 23 PARK STREET MARINA...</option
                      >
                    </TailSelect>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Direcci??n</label>
                  <textarea
                    class="input w-full border mt-2"
                    placeholder="Adress"
                  >
10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore</textarea
                  >
                </div>
                <button
                  type="button"
                  class="button w-20 bg-theme-1 text-white mt-3"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Display Information -->
        <!-- BEGIN: Personal Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Informaci??n Personal</h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Ingrese Dato"
                    :value="$f()[0].users[0].email"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Nombre</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Ingrese Dato"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Tipo de identificaci??n</label>
                  <select class="input w-full border mt-2">
                    <option>CC</option>
                    <option>Permiso Especial</option>
                    <option>Pasaporte</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label>N??mero de Identificaci??n</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Ingrese Dato"
                    value="357821204950001"
                  />
                </div>
              </div>
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label>N??mero de Tel??fono</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Ingrese Dato"
                    value="65570828"
                  />
                </div>
                <div class="mt-3">
                  <label>Direcci??n</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Ingrese Dato"
                    value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                  />
                </div>
                <div class="mt-3">
                  <label>Banco</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="select"
                      :options="{
                        search: true,
                        classNames: 'w-full'
                      }"
                    >
                      <option value="1">SBI - STATE BANK OF INDIA</option>
                      <option value="1">CITI BANK - CITI BANK</option>
                    </TailSelect>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Cuenta Bancaria</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Ingrese Dato"
                    value="DBS Current 011-903573-0"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <a href="" class="text-theme-6 flex items-center">
                <Trash2Icon class="w-4 h-4 mr-1" /> Borrar Cuenta
              </a>
              <button
                type="button"
                class="button w-20 bg-theme-1 text-white ml-auto"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
        <!-- END: Personal Information -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "1"
    };
  }
};
</script>
