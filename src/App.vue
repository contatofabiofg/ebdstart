<template>
<main>
  <div class="painel d-flex flex-row justify-content-center align-items-center">
      <router-view v-slot="{ Component }">
      <transition name="mainroute" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>

  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';  



export default defineComponent({
  name: 'App',
  data() {
    return {
     
    }
  },
  components: {
 

  },
  methods: {
 
  }
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

main {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background-color: rgb(248, 248, 248);
 
   }
  body {
    background-color: rgb(248, 248, 248);
  }


.modoclaro {
  --bg: white;
  --gradiente: linear-gradient(54deg, rgba(79,81,84,1) 0%, rgba(105,97,126,1) 46%, rgba(136,138,138,1) 100%);
  --texto: black;
  --textosidebar: white;
  --botaocor: rgb(247, 247, 247);
  --botaocor2: rgb(190, 190, 190);
  --botaocorover: rgb(136, 136, 136);
  --botaocorover2: rgb(114, 114, 114);
  --sidebarbg: rgb(29, 29, 29);
  
}
.mododark {
  --bg: rgb(75, 75, 75);
  --gradiente: linear-gradient(54deg, rgba(17,20,23,1) 0%, rgba(29,23,43,1) 46%, rgba(54,56,56,1) 100%);
  --texto: white;
   --textosidebar: white;  
   --botaocor: rgb(64, 51, 80);
  --botaocor2: rgb(64, 51, 80);
  --botaocorover: rgb(93, 75, 116);
  --botaocorover2: rgb(93, 75, 116);
  --sidebarbg: rgb(29, 29, 29);
}

.painel {
  overflow-x: hidden;
  transition: 2s ease all;
}
.mainroute-enter-from {
    transform: translateX(30px);
    opacity: 0;
}

.mainroute-enter-active {
      transition: 0.2s ease all;
    
}

.mainroute-leave-to {
    transform: translateX(-30px);
    opacity: 0;
}
.mainroute-leave-active  {
    transition: 0.2s ease all;
}

</style>
