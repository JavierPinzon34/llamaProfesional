<template>
  <div class="request-service-class">
    <div class="flex items-center mt-8 mb-5">
      <h2 class="intro-y text-lg font-medium mr-auto">Pedir Servicio</h2>
    </div>
    <div class="flex items-cente justify-center text-2xl mb-8">
      <h1>¿Que necesitas?</h1>
    </div>
    <div class="flex mb-5">
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Salud
      </div>
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Veterinaria
      </div>
    </div>
    <div class="flex mb-8">
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Aseo y <br />
        mantenimiento
      </div>
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Profesional
      </div>
    </div>
    <div>
      <textarea
        id="necesidad"
        name="necesidad"
        rows="4"
        placeholder="Describe tu necesidad"
        class="w-full"
      ></textarea>
    </div>
  </div>
</template>
<style lang="scss">
.request-service-class {
  .img-content {
    img {
      height: 100px;
      object-fit: cover;
    }
  }
  .separator {
    height: 2px;
    background-color: rgb(204, 198, 198);
  }
}
</style>
