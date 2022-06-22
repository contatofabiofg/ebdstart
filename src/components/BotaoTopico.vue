<template>
<div class="botao w-70 my-1 font-weight-bold d-flex flex-column justify-content-center align-items-center"><strong>{{texto!.toUpperCase()}}</strong>

</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BotaoTopicoC',
  props: {
    texto: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.botao {
    background-color: rgb(236, 236, 236);
    cursor: pointer;
    height: 50px;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
     font-size: 14px;
}
.botao:hover {
    background-color: rgb(209, 209, 209);

}

</style>
