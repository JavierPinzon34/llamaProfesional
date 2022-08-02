<template>
  <div>
    <h2 class="intro-y text-xl font-medium mt-3">Profesionales</h2>
    <div class="grid grid-cols-12 gap-6">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2"
      >
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:mr-auto md:mr-0">
          <div class="w-full relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="input w-full box pr-10 placeholder-theme-13"
              placeholder="Buscar..."
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
        <div class="hidden md:block mx-auto text-gray-600">
          Mostrando 1 a 10 de 150 Registros
        </div>
      </div>
      <!-- BEGIN: Users Layout -->
      <div
        v-for="(faker, fakerKey) in $f()"
        :key="fakerKey"
        class="intro-y col-span-12 md:col-span-6"
      >
        <div class="box">
          <div class="flex flex-col lg:flex-row items-center p-5">
            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
            </div>
            <div
              class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0"
            >
              <a href="" class="font-medium">{{ faker.users[0].name }}</a>
              <div class="text-gray-600 text-xs">{{ faker.jobs[0] }}</div>
            </div>
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
            <div class="flex mt-4 lg:mt-0">
              <button class="button button--sm text-white bg-theme-1 mr-2">
                Mensaje
              </button>
              <button
                class="button button--sm text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300"
              >
                Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- BEGIN: Users Layout -->
      <!-- END: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center"
      >
        <ul class="pagination">
          <li>
            <a class="pagination__link" href="">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">1</a>
          </li>
          <li>
            <a class="pagination__link pagination__link--active" href="">2</a>
          </li>
          <li>
            <a class="pagination__link" href="">3</a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
        <select class="w-20 input box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
  </div>
</template>
<style>
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
</style>
