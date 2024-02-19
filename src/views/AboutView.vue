<template>
  <div class="bg-blue-800 p-5  ">
    <h2 class="text-white text-center mx-auto uppercase font-black text-2xl"><router-link to="/"> Safety</router-link>   </h2>
  </div>

  <div class="w-auto">
  <div class="text-center mx-auto mt-5">
    <h3 class="text-3xl font-bold text-gray-800">{{ $route.params.titulo }}</h3>
    <span class=" text-gray-800">Por favor, preencha os dados abaixo.
    </span>
  </div>

  <div class="mt-12">
    <form class="max-w-md mx-auto">
      <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="floating_email" id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CNPJ/CPF</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="floating_email" id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="floating_email" id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="floating_email" id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" " required />
        <label for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contato</label>
      </div>
      
      
     
  
    <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Enviar</button>
  </form>

</div>

<div class="float-right cursor-pointer ">
  <a href=""> <img :src="whats" class="w-10 mx-10 fixed bottom-0 right-0 mb-10" alt=""></a>

</div>
</div>

</template>

<style>@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}</style>

<script setup>
import router from "@/router";
import whats from "./../assets/whatsapp.png";

</script>
