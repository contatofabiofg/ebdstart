<template>
<div class="dark mw-100 overflow-hidden d-flex flex-column justify-content-center align-items-center"  >{{texto}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DarkModeC',
  props: {
    texto: String
  }
   });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dark {
    background-color: var(--botaocor);
    color: var(--texto);
    height: 30px;
    width: 100px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 10px;
    
}
.dark:hover {
    background-color: var(--botaocorover);

}

</style>
