<template>
<div class="botao w-60 my-1 d-flex flex-column justify-content-center align-items-center" >{{texto!.toUpperCase()}}</div>
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
    background-color: var(--botaocor);
    color: var(--texto);
    height: 30px;
    margin-left: 30px;
    cursor: pointer;
    font-size: 11px;
   overflow: hidden;
    
}
.botao:hover {
    background-color: var(--botaocorover);

}

</style>
