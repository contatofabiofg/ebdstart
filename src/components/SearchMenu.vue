<template>

        {{requisicaoteste("Menu Busca Carregado")}}
           
            <div v-for="(item, index) in posts" :key="index"> 
                
                <router-link v-if="item.title.toLowerCase().startsWith(search!.toLowerCase()) && search! !== ''" style="text-decoration: none; color: inherit;"
                    :to="item.path" >
                    <Button :texto="item.title" />
                </router-link>
                
                
            </div>
        </template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from "@/components/Button.vue"
import posts from "@/posts"
import _ from 'lodash';


export default defineComponent({
  name: 'MenuBuscaC',
  data() {
    return {
            posts,
            timeout: 0,
    }
  },
props: {
    search: String
    
  },
  

  methods: {
        requisicaoteste(texto: string): void {
            console.log(texto)
        },
        
  }, 
  components: {
    
    Button,
    
  }
 
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
