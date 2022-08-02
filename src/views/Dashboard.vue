<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
      <!-- BEGIN: General Report -->
      <div class="col-span-12 mt-8">
        <div class="intro-y flex items-center h-10">
          <h1 class="text-xl font-medium truncate mr-5">¡Hola Mauricio!</h1>
          <a href="" class="ml-auto flex text-theme-1 dark:text-theme-10">
            <RefreshCcwIcon class="w-4 h-4 mr-3" /> Recargar Información
          </a>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <UserIcon class="report-box__icon text-theme-9" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="22% Higher than last month"
                    >
                      22% <ChevronUpIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">152.000</div>
                <div class="text-base text-gray-600 mt-1">Solicitudes</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <MonitorIcon class="report-box__icon text-theme-12" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="12% Higher than last month"
                    >
                      12% <ChevronUpIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">5</div>
                <div class="text-base text-gray-600 mt-1">Valoración</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: General Report -->
      <!-- BEGIN: General Report -->
      <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
        <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
          <div class="mini-report-chart box p-5 zoom-in">
            <div class="flex items-center">
              <div class="w-full flex-none">
                <div class="text-lg font-medium truncate flex items-center">
                  <AwardIcon class="mr-3" />
                  Certificación
                </div>
                <div class="text-gray-600 mt-1 flex items-center">
                  Obtén el certificado de antecedentes de forma gratuita.
                  <ChevronRightIcon class="ml-auto w-1/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
          <div class="mini-report-chart box p-5 zoom-in">
            <div class="flex items-center">
              <div class="w-full flex-none">
                <div class="text-lg font-medium truncate flex items-center">
                  <ShoppingCartIcon class="mr-3" />
                  Compra de servicios
                </div>
                <div class="text-gray-600 mt-1 flex items-center">
                  Aquí adquiere paquete de servicios.
                  <ChevronRightIcon class="ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
          <div class="mini-report-chart box p-5 zoom-in">
            <div class="flex items-center">
              <div class="w-full flex-none">
                <div class="text-lg font-medium truncate flex items-center">
                  <SmileIcon class="mr-3" />
                  Pedir un servicio
                </div>
                <div class="text-gray-600 mt-1 flex items-center">
                  Pide tu servicio para tu hogar.
                  <ChevronRightIcon class="ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: General Report -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      salesReportFilter: ""
    };
  },
  methods: {
    prevImportantNotes() {
      this.$refs["important-notes"].prev();
    },
    nextImportantNotes() {
      this.$refs["important-notes"].next();
    }
  }
};
</script>
