<template>
  
  <header class=" h-screen mb-12 overflow-hidden">
    
    <div class=" relative  text-center z-30 p-5 text-4xl text-white mt-32">
      <h3 class="font-bold uppercase mb-20">Cotação Facilities </h3>
    </div>

    <div class="relative flex items-center justify-center">

    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

      <div class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <h3>Cotar </h3>
      <h3>Limpeza </h3>
    </div>
    <div class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <h3>Cotar </h3>
      <h3>Portaria </h3>
    </div>
    <div class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <h3>Cotar </h3>
      <h3>Controle de Acesso </h3>
    </div>
    <div class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <h3>Cotar </h3>
      <h3>Jardinagem </h3>
    </div>
    <div class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <h3>Cotar </h3>
      <h3>Manutencista</h3>
    </div>
    </div>
  </div>
   
    
    <div class="absolute inset-0 z-0">
        <video autoplay loop muted class="w-full h-full object-cover  ">
          <source :src="video" type="video/mp4">
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      <div class="w-48 float-end mt-64 bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-5 text-2xl text-white border-white border-2  rounded-s-xl">
        <img :src="logo" class="w-48  mx-auto mb-4" alt="">

    </div>

      <!-- Sobreposição escura -->
      <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

      
  </header>
</template>

<script setup>
import video from "./../../public/video/wallpaper.mp4"
import logo from "./../assets/logo.png"


</script>
