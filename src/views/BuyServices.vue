<template>
  <div class="buy-service-class">
    <div class="flex items-center mt-8 mb-5">
      <h2 class="intro-y text-lg font-medium mr-auto">Compra de servicios</h2>
    </div>
    <div class="text-center img-content mb-6">
      <img src="@/assets/images/credit_cart.png" class="mx-auto" alt="" />
    </div>
    <div class="flex items-cente justify-center text-2xl">
      <h1>Revisa tu lista de servicios</h1>
    </div>
    <div class="separator mt-8 mb-8"></div>
    <div class="flex">
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Mis <br />
        servicios
      </div>
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Historial<br />servicios
      </div>
      <div class="flex-auto text-center accion-custom">
        <img src="@/assets/images/mis-servicios.png" class="mx-auto" alt="" />
        Mas <br />
        información
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.buy-service-class {
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
