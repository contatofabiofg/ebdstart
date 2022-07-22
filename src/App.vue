<template>
<main :class="{'mododark': mododarkative, 'modoclaro': !mododarkative}">
  <div class="painel d-flex flex-row justify-content-center align-items-center">
      <router-view/>
  </div>

  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'App',
  data() {
    return {
      mododarkative: false
    }
  },
  components: {
 

  },
  methods: {
    alterarmodo() {
      this.mododarkative = !this.mododarkative
    }
  }
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

main {
  width: 100vw;
  height: 100vh;
  background-image: url("../public/wall1.png");
  background-position: center;
  background-size: cover;
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
}


</style>
