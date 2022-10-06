<template>
  <div class="request-service-class">
    <div class="flex items-cente justify-center text-2xl mt-3 mb-1">
      <h1>Contactar Profesional</h1>
    </div>
    <div class="flex items-cente justify-center text-2xl mb-2">
      <p class="clasificacion mr-2">
        <input id="radio1" type="radio" name="estrellas" value="5" />
        <label for="radio1">★</label>
        <input id="radio2" type="radio" name="estrellas" value="4" />
        <label for="radio2">★</label>
        <input id="radio3" type="radio" name="estrellas" value="3" />
        <label for="radio3">★</label>
        <input id="radio4" type="radio" name="estrellas" value="2" />
        <label for="radio4">★</label>
        <input id="radio5" type="radio" name="estrellas" value="1" />
        <label for="radio5">★</label>
      </p>
    </div>
    <div class="text-center">
      <h3>JUAN PABLO CARDENAS</h3>
      <h3>EXPERIENCIA 43 MESES</h3>
      <h3>SERVICIOS REALIZADOS 23</h3>
      <h3>Horario</h3>
    </div>
    <div class="news__input relative mt-5 mb-5">
      <textarea
        class="input w-full bg-gray-200 py-2 placeholder-theme-13 resize-none"
        rows="7"
        placeholder="Describa la necesidad"
      ></textarea>
    </div>
    <div class="news__input relative mt-5 mb-5">
      <textarea
        class="input w-full bg-gray-200 py-2 placeholder-theme-13 resize-none"
        rows="7"
        placeholder="Observaciones y generalidades para el servicio"
      ></textarea>
    </div>
    <div class="text-center">
      <button class="button w-full mr-1 mb-2 bg-theme-1 text-white">
        Solicitar Servicio
      </button>
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
  p.clasificacion {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  p.clasificacion input {
    position: absolute;
    top: -100px;
  }

  p.clasificacion label {
    float: right;
    color: #333;
  }

  p.clasificacion label:hover,
  p.clasificacion label:hover ~ label,
  p.clasificacion input:checked ~ label {
    color: #dd4;
  }

  .input {
    box-shadow: 0 0 0 3px rgba(71, 156, 226, 0.5);
  }
}
</style>
