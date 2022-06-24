<template>

        {{requisicaoteste("Menu Busca Carregado")}}
           
            <div v-for="(item, index) in postagem" :key="index"> 
                
                <router-link v-if="item.titulo.toLowerCase().startsWith(buscar!.toLowerCase()) && buscar! !== ''" style="text-decoration: none; color: inherit;"
                    :to="item.path" >
                    <Botao :texto="item.titulo" />
                </router-link>
                
                
            </div>
        </template>

<script lang="ts">
import { defineComponent } from 'vue';
import Botao from "@/components/Botao.vue"
import postagem from "@/posts"
import _ from 'lodash';


export default defineComponent({
  name: 'MenuBuscaC',
  data() {
    return {
            postagem,
            timeout: 0,
    }
  },
props: {
    buscar: String
    
  },
  

  methods: {
        requisicaoteste(texto: string): void {
            console.log(texto)
        },
        
  }, 
  components: {
    
    Botao,
    
  }
 
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.botao {
    background-color: rgb(247, 247, 247);
    height: 30px;
    margin-left: 30px;
    cursor: pointer;
    font-size: 11px;
   overflow: hidden;
    
}
.botao:hover {
    background-color: rgb(236, 236, 236);

}

</style>
