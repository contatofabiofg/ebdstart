<template>
  <div @click="mudarsetinha(`${setaid}`)" class="botaotopico font-weight-bold d-flex flex-row justify-content-between align-items-center cursor-pointer overflow-hidden">
    <div class="nome d-flex flex-row justify-content-center align-items-center">
       <div id="menuicon" :style="{ backgroundImage: 'url(' + imagem + ')' }"></div>
        <div>{{ texto! }}</div>
    </div>
    
    <div :class="[`${setaid}`, arrow? 'menuarrow' : 'semarrow']"></div>
    
  </div>

</template>



<script lang="ts">
import { defineComponent } from 'vue';
import gsap from "gsap";


export default defineComponent({
  name: 'BotaoTopicoC',
  data() {
    return {
      seta: false,
      
      
    }
  },
  props: {
    texto: String,
    imagem: String,
    setaid: String,
    arrow: Boolean
  },
   
  methods: {
    mudarsetinha(estaseta: string) {

      if (!this.seta) {
        gsap.to(`.${estaseta}`, {rotation: 90, duration: 0.3});
        this.seta = !this.seta
      } else {
       gsap.to(`.${estaseta}`, {rotation: 0, duration: 0.3}); 
       this.seta = !this.seta
      }
      
      //
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.botaotopico {
  /*background-color: var(--botaocor);*/
  color: var(--textosidebar);
  width: 260px;
  
  height: 40px;
  font-family: "Montserrat";
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 5px;
}

.botaotopico:hover {
  background-color: var(--botaocorover);

}
.nome {
  margin-left: 10px
}

#menuicon {
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: cover;
  transform: 0, 2s all ease;
  margin-right: 10px;
  filter: invert(100%);
}

.menuarrow {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background-image: url("../../public/arrow.png");
  background-position: center;
  background-size: cover;
  transition: 0,5s all ease;
  filter: invert(100%);
}

.semarrow {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

</style>
