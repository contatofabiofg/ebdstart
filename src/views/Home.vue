<template>
  <div class="home d-flex flex-column justify-content-center align-items-center">
      <h1>e ai, o que vamos estudar hoje?</h1>
    <div class="inputarea d-flex flex-row justify-content-center align-items-center">
      <input class="form-control" placeholder="Encontrar" v-model="busca" />
      <div class="searchbutton">Pesquisar</div>
    </div>
    <router-view/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



import postagem from "@/posts";


export default defineComponent({
  name: 'HomeV',
  data() {
        return {
            
       
            postagem,
            
            busca: "",
            busca2: "",
            campobuscavazio: true,
            botaoencontrado: false,
            timeout: 0,
            mododarkativado: false,
            
        }},
  components: {
  

  }
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.home {
  width: 100vw;
  margin-top: 40px;
 
}

h1 {
font-family: "Montserrat";
font-weight: bold;
color: rgb(70, 70, 70);
}

input {
  width: 600px;
  margin: 10px 0px;
  box-shadow: -5px 5px 25px rgb(163, 163, 163);
}

.searchbutton {
  width: 150px;
  padding: 5px;
  border-radius: 3px;
  color: white;
  text-align: center;
  background-color: darkgreen;
  cursor: pointer;
}
</style>
