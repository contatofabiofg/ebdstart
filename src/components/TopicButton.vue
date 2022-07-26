<template>
  <div class="topicbutton font-weight-bold d-flex flex-column justify-content-center align-items-center cursor-pointer overflow-hidden" :style="`background-color:${color}` ">
 
    
    <div class="name d-flex flex-row justify-content-center align-items-center" >
        <div>{{title}}</div>
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
    title: String,
    color: String
  },
   
  methods: {
   
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.topicbutton {
  /*background-color: var(--botaocor);*/
  width: 175px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 16px;
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  margin: 5px;
  transition: 0.3s ease all;
  color: white;
  box-shadow: -3px 3px 3px rgb(168, 168, 168);
}

.topicbutton:hover {
 transform: scale(103%);

}
.name {
  margin-left: 10px
}

@media (max-width: 500px) {  
  .topicbutton {
   width: 120px;
}
}


</style>
