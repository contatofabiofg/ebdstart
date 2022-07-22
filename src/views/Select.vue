<template>
  <div class="home d-flex flex-column justify-content-center align-items-center">
   
    <div class="campoinput">
      <input class="input form-control" placeholder="Encontrar" v-model="busca" />
    </div>
    <SubMenu v-if="campobuscavazio" />
    <SearchMenu v-else :buscar="busca2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubMenu from "@/components/SubMenu.vue";
import SearchMenu from "@/components/SearchMenu.vue";

import postagem from "@/posts";


export default defineComponent({
  name: 'SelectV',
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
    SubMenu,
    SearchMenu,

  }
});
</script>


<style scoped>
.home {
  width: 100vw;
 
}
</style>
