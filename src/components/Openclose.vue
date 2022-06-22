<template>

    <div class="openclose openclose2" v-if="!info"></div>
    <div class="openclose " v-else></div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'opencloseC',
    
    props: {
        info: Boolean
    },

   
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.openclose2 {
    
    transform: rotateY(180deg);
    
    
}

.openclose {
    width: 30px;
    height: 30px;
    background-image: url("../../public/openclose.png");
    background-position: center;
    background-size: cover;
    position: relative;
    float: right;
    right: -35px;
    transform: 0,2s all ease;
    
}



</style>
