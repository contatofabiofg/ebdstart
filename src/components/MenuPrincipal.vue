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
            <BotaoTopico texto="Exercícios" @click="mostrarexercicios" />
            <div v-if="menuexercicios">
                <div v-for="(item, index) in exercicio" :key="index">
                    <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                        <Botao :texto="item.nome" />
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
import exercicio from "@/exercicios"
import _ from 'lodash';


export default defineComponent({
  name: 'MenuPrincipalC',
  data() {
    return {
        
            topicos1: false,
            topicos2: false,
            topicos3: false,
            menuexercicios: false,
            postagem,
            exercicio,
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
        mostrarexercicios(): void {
            this.menuexercicios = !this.menuexercicios //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
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



</style>
