<template>
<div>
        {{requisicaoteste("Menu Principal Carregado")}}
            <BotaoTopico texto="Tópico" @click="mostrarlista1" />
            <div v-if="topicos1">
                <div v-for="(item, index) in postagem" :key="index">

                    <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                        <Botao :texto="item.titulo" />
                    </router-link>
                </div>
            </div>
            <BotaoTopico texto="Tópico2" @click="mostrarlista2" />
            <div v-if="topicos2">
                <div v-for="(item, index) in postagem" :key="index">
                    <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                        <Botao :texto="item.titulo" />
                    </router-link>
                </div>
            </div>
            <BotaoTopico texto="Tópico2" @click="mostrarlista2" />
            <div v-if="topicos2">
                <div v-for="(item, index) in postagem" :key="index">
                    <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                        <Botao :texto="item.titulo" />
                    </router-link>
                </div>
            </div>
            <BotaoTopico texto="Tópico2" @click="mostrarlista2" />
            <div v-if="topicos2">
                <div v-for="(item, index) in postagem" :key="index">
                    <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                        <Botao :texto="item.titulo" />
                    </router-link>
                </div>
            </div>
        </div>
        </template>

<script lang="ts">
import { defineComponent } from 'vue';
import Botao from "@/components/Botao.vue"
import BotaoTopico from "@/components/BotaoTopico.vue"
import postagem from "@/posts"
import _ from 'lodash';


export default defineComponent({
  name: 'MenuPrincipalC',
  data() {
    return {
        
            topicos1: false,
            topicos2: false,
            topicos3: false,
            topicos4: false,
            postagem,
            timeout: 0,
    }
  },
  

  methods: {
        requisicaoteste(texto: string): void {
            console.log(texto)
        },
        mostrarlista1(): void {
        this.topicos1 = !this.topicos1 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        mostrarlista2(): void {
            this.topicos2 = !this.topicos2 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
  }, 
  components: {
    BotaoTopico,
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
