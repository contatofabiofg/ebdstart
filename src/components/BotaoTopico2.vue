<template>
  <div @mouseover="animate" @mouseout="animate" class="botaotopico2 font-weight-bold d-flex flex-column justify-content-between align-items-center cursor-pointer overflow-hidden">
    <div class="imagembotao" :class="{'animateclass': animateimage}" :style="{ backgroundImage: 'url(' + image + ')' }">

    </div>
    
    
    <div class="nome d-flex flex-row justify-content-center align-items-center" :style="`background-color:${cor}` ">
        <div>{{titulo}}</div>
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
    titulo: String,
    cor: String,
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

.botaotopico2 {
  /*background-color: var(--botaocor);*/
  min-width: 170px;
  min-height: 170px;
  font-family: "Montserrat";
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  margin: 5px;
  transition: 0.3s ease all;
}

.botaotopico2:hover {
  transform: scale(103%);

}

.imagembotao {
    width: 100%;
   height: 120px;
   background-position: center;
  background-size: cover;
  z-index: 0;
}

.nome {
    color: white;
    width: 100%;
    height: 50px;
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







</style>
