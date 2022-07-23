<template>
  <div @mouseover="animate" @mouseout="animate" class="topicbutton2 font-weight-bold d-flex flex-column justify-content-between align-items-center cursor-pointer overflow-hidden">
    <div class="imagebutton" :class="{'animateclass': animateimage}" :style="{ backgroundImage: 'url(' + image + ')' }">

    </div>
    
    
    <div class="name d-flex flex-row justify-content-center align-items-center" :style="`background-color:${color}` ">
        <div>{{title}}</div>
    </div>
    
    
    
  </div>

</template>



<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'BotaoTopico2C',
  data() {
    return {
        animateimage: false
      
      
    }
  },
  props: {
    title: String,
    color: String,
    image: String

  },
   
  methods: {
   /* mudarsetinha(estaseta: string) {

      if (!this.seta) {
        gsap.to(`.${estaseta}`, {rotation: 90, duration: 0.3});
        this.seta = !this.seta
      } else {
       gsap.to(`.${estaseta}`, {rotation: 0, duration: 0.3}); 
       this.seta = !this.seta
      }
      
      //
    }
    */
   animate() {
    this.animateimage = !this.animateimage;

   }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.topicbutton2 {
  /*background-color: var(--botaocor);*/
  width: 175px;
  height: 250px;
  font-family: "Montserrat";
  font-size: 16px;
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  margin: 5px;
  transition: 0.3s ease all;
  box-shadow: -3px 3px 3px rgb(168, 168, 168);
}

.topicbutton2:hover {
  transform: scale(101%);

}

.imagebutton {
    width: 100%;
   height: 280px;
   background-position: center;
  background-size: cover;
  z-index: 0;
}

.name {
    color: white;
    width: 100%;
    height: 70px;
    z-index: 1;
}
.animateclass {
    
    animation: imagemanimada 1.5s;
    animation-fill-mode: forwards;

}

@keyframes imagemanimada {
    0% {
        margin-right:0px;
    }
    10%{
    margin-right:10px;
    transform: scale(120%);
    }

    100% {
        margin-right: 0px;
        transform: scale(120%)
    }
}

@media (max-width: 500px) {  
  .topicbutton2 {
  height: 180px;
  width: 140px;
}
}






</style>
