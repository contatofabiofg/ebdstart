<template>
  <div class="botaotopico font-weight-bold d-flex flex-column justify-content-center align-items-center cursor-pointer overflow-hidden" :style="`background-color:${cor}` ">
 
    
    <div class="nome d-flex flex-row justify-content-center align-items-center" >
        <div>{{titulo}}</div>
    </div>
    
    
    
  </div>


</template>



<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
  name: 'BotaoTopicoC',
  data() {
    return {
     
      
      
    }
  },
  props: {
    titulo: String,
    cor: String
  },
   
  methods: {
   
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.botaotopico {
  /*background-color: var(--botaocor);*/
  min-width: 170px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  margin: 5px;
  transition: 0.3s ease all;
  color: white;
}

.botaotopico:hover {
  background-color: var(--botaocorover);

}
.nome {
  margin-left: 10px
}



</style>
