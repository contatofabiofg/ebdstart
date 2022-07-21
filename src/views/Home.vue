<template>
  <div class="home d-flex flex-column justify-content-center align-items-center">
    <Logo />
   
    <div class="campoinput">
      <input class="input form-control" placeholder="Encontrar" v-model="busca" />
    </div>
    <MenuPrincipal v-if="campobuscavazio" />
    <MenuBusca v-else :buscar="busca2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuPrincipal from "@/components/MenuPrincipal.vue";
import MenuBusca from "@/components/MenuBusca.vue";
import Logo from "@/components/Logo.vue";

import postagem from "@/posts";


export default defineComponent({
  name: 'HomeV',
  data() {
        return {
            
       
            postagem,
            
            busca: "",
            busca2: "",
            campobuscavazio: true,
            botaoencontrado: false,
            timeout: 0,
            mododarkativado: false,
            
        }},
  components: {
    Logo,
    MenuPrincipal,
    MenuBusca,

  }
});
</script>


<style scoped>
.home {
  width: 100vw;
 
}
</style>
