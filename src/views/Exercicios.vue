<template>
  <div class="exercicio">
    <Exercicio :key="componentKey"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Exercicio from "@/components/Exercicio.vue"

export default defineComponent({
  name: 'ExerciciosV',
  components: {
    Exercicio
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
    console.log("Post recarregado")
    this.componentKey += 1
    }
  }
});
</script>
<style>
.home {
  max-width: 75%;
}
</style>
