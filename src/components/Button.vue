<template>
<div class="button w-60  d-flex flex-column justify-content-center align-items-center cursor-pointer overflow-hidden" >{{text!.toUpperCase()}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BotaoC',
  props: {
    text: String,
    path: String
  },
 
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
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
.button:hover {
    background-color: var(--botaocorover);
}

</style>
