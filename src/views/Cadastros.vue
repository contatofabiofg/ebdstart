<template>
  <div class="cadastro">
    <Cadastro :key="componentKey"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cadastro from "@/components/Cadastro.vue"

export default defineComponent({
  name: 'CadastroV',
  components: {
    Cadastro
  },
  watch:{
    $route (){
        this.forceRerender()
    }
  },
  data() {
    return {
      url: window.location.pathname,
      componentKey: 0
    }
  },
  methods: {
    forceRerender():void {
    console.log("Cadastro recarregado")
    this.componentKey += 1
    }
  }
});
</script>
<style>
.cadastro {
  max-width: 75%;
}
</style>
