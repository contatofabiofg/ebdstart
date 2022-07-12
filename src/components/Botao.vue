<template>
<div class="botao w-60  d-flex flex-column justify-content-center align-items-center cursor-pointer overflow-hidden" >{{texto!.toUpperCase()}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BotaoC',
  props: {
    texto: String,
    path: String
  },
 
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.botao {
  color: var(--textosidebar);
  width: 260px;
  max-width: 100%;
  height: 30px;
  font-family: "Montserrat";
  font-size: 11px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 5px;
   }
.botao:hover {
    background-color: var(--botaocorover);
}

</style>
