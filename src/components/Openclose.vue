<template>

    <div class="openclose"></div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'opencloseC',
    emits: [ "openclosesidebar"]
    ,
    data() {
        return {
            sidebarvisible: false,
                    }
    },


    methods: {
     sidebartoggle () {
     this.$emit("openclosesidebar")
        }
    }


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.openclose {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: gray;
    position: relative;
    float: right;
    right: -35px;
    
}


</style>
