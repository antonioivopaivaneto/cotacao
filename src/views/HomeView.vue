<template>
  
  <header class="  mb-6 bg-slate-500 ">
    
    <div class=" relative  text-center z-30 p-2.5 text-4xl text-white ">
      <h3 class="font-bold uppercase mb-10 mt-10">Cotação Facilities </h3>
    </div>

    <div class=" flex items-center justify-center ">

    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-red-400">


      <div @mouseover="limpeza = limpezaB" @mouseleave="limpeza = limpezaA" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
        <router-link :to="{name: 'contato', params:{titulo:'Limpeza'}}">

        <img :src="limpeza"  class="w-9 sm:w-24 mx-auto" alt="">
        <h3 class="text-sm sm:text-lg ">Limpeza </h3>
      </router-link>
        
    </div>
    <div @mouseover="porteiro = porteiroB" @mouseleave="porteiro = porteiroA"  class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Zeladoria'}}">
      <img :src="porteiro"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Zeladoria </h3>
      </router-link>
    </div>
    <div @mouseover="acesso = acessoB" @mouseleave="acesso = acessoA" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Controle de Acesso'}}">

      <img :src="acesso"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Controle de Acesso </h3>
      </router-link>

    </div>
    <div @mouseover="jardin = jardinB" @mouseleave="jardin = jardinA" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Jardinagem'}}">

      <img :src="jardin"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Jardinagem </h3>
      </router-link>
    </div>
    <div @mouseover="manu = manuA" @mouseleave="manu = manuB" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Manutencista'}}">

      <img :src="manu"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Manutencista</h3>
      </router-link>
    </div>
    <div @mouseover="cope = copeA" @mouseleave="cope = copeB" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Copeira'}}">

      <img :src="cope"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Copeira</h3>
      </router-link>
    </div>
    <div @mouseover="recep = recepA" @mouseleave="recep = recepB" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Atendimento e Recepção'}}">

      <img :src="recep"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Atendimento e Recepção</h3>
      </router-link>
    </div>
    <div @mouseover="custo = custoA" @mouseleave="custo = custoB" class="hover:bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5  text-2xl text-white border-white border-2 bg-opacity-50 rounded-xl">
      <router-link :to="{name: 'contato', params:{titulo:'Outros Serviços'}}">

      <img :src="custo"  class="w-9 sm:w-24 mx-auto" alt="">
      <h3 class="text-sm sm:text-lg ">Outros</h3>
      </router-link>
    </div>
    </div>
  </div>
   
    
    <div class="absolute inset-0 z-0 h-screen">
        <video autoplay loop muted class="w-full h-full object-cover  ">
          <source :src="video" type="video/mp4">
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>

      <a target="_blank" href="https://safetyfacilities.com.br/"><div class="w-24 float-end mr-0  bg-white hover:text-gray-700 font-bold cursor-pointer mx-2 relative text-center z-30 p-2.5 text-2xl text-white border-white border-2  rounded-s-xl">
        <img :src="logo" class="w-48  mx-auto mb-4" alt="">
        

    </div>

  </a>

      <!-- Sobreposição escura -->
      <div class="absolute inset-0 bg-black opacity-50 z-10"></div>

      
  </header>
</template>

<script setup>
import video from "./../assets/video/wallpaper.mp4"
import logo from "./../assets/logo.png"

import limpezaA from "./../assets/icones/limpeza (2).png"
import limpezaB from "./../assets/icones/limpeza (1).png"
import porteiroA from "./../assets/icones/porteiro (1).png"
import porteiroB from "./../assets/icones/porteiro (2).png"
import acessoA from "./../assets/icones/controle-de-acesso (1).png"
import acessoB from "./../assets/icones/controle-de-acesso.png"
import jardinA from "./../assets/icones/jardineiro (1).png"
import jardinB from "./../assets/icones/jardineiro.png"
import manuA from "./../assets/icones/manutencao (1).png"
import manuB from "./../assets/icones/manutencao.png"
import copeA from "./../assets/icones/garcom (1).png"
import copeB from "./../assets/icones/garcom.png"
import recepA from "./../assets/icones/recepcao (1).png"
import recepB from "./../assets/icones/recepcao.png"
import custoA from "./../assets/icones/customizar (1).png"
import custoB from "./../assets/icones/customizar.png"

import { ref } from "vue"


const limpeza = ref(limpezaA)
const porteiro = ref(porteiroA)
const acesso = ref(acessoA)
const jardin = ref(jardinA)
const manu = ref(manuB)
const cope = ref(copeB)
const recep = ref(recepB)
const custo = ref(custoB)

</script>


<style ></style>