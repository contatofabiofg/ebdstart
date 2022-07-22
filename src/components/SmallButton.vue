<template>
  <div class="smallbutton font-weight-bold d-flex flex-column justify-content-between align-items-center cursor-pointer overflow-hidden" :style="`background-color: rgba(${color}, 0.9)`">
   <div class="imagearea d-flex flex-column justify-content-center align-items-center">
   <div class="imagebutton" :style="{ backgroundImage: 'url(' + image + ')' }">

    </div>
    </div>
    
    <div class="name d-flex flex-row justify-content-center align-items-center" :style="`background-color: rgb(${color});`">
        <div class="text">{{title}}</div>
    </div>

  </div>

</template>



<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'SmallButtonC',
  data() {
    return {
           
      
    }
  },
  props: {
    title: String,
    color: String,
    image: String

  },
   
  methods: {

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.smallbutton {
  
  width: 80px;
  height: 80px;
  font-family: "Montserrat";
  font-size: 10px;
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  margin: 4px;
  transition: 0.2s ease all;
  box-shadow: -3px 3px 3px rgb(168, 168, 168);
  }

.smallbutton:hover {
  transform: scale(103%);

}

.imagearea {
  width: 80px;
  height: 55px;
}

.imagebutton {
   width: 35px;
   height: 35px;
   background-position: center;
   background-size: cover;
   z-index: 0;
   opacity: 0.8;
}

.name {
    color: white;
    width: 100%;
    height: 25px;
    z-index: 1;
}
.text {
  filter: brightness(100%);
  z-index: 2;
}

</style>
