<template>
    <div class="openclose "></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'opencloseC',
   
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.openclose {
    width: 50px;
    height: 50px;    
    background-image: url("../../public/openclose.png");
    background-position: center;
    background-size: cover;
    position: relative;
    float: right;
    right: -25px;
    top: 10px;
    transform: 0,2s all ease;
}
</style>
