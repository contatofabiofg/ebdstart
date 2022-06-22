<template>


    <div class="sidebar" :class="{ 'sidebarfechado': sidebarvisible }">
<Openclose @click="sidebartoggle" :info="sidebarvisible" :key="contadorOpenClose"/>
<Logo />

        
        <BotaoTopico texto="Tópico" @click="mostrarlista1" />
        <div v-if="topicos1">
            <div v-for="(item, index) in postagem" :key="index">
                <router-link style="text-decoration: none; color: inherit;" :to="item.path" @click="sidebartoggle">
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
import Openclose from "@/components/Openclose.vue"
import postagem from "@/posts"
import Logo from "@/components/Logo.vue"

export default defineComponent({
    name: 'SidebarC',
    data() {
        return {
            sidebarvisible: false,
            topicos1: false,
            topicos2: false,
            topicos3: false,
            topicos4: false,
            postagem,
            contadorOpenClose: 0

        }
    },
    components: {
        Botao,
        BotaoTopico,
        Openclose,
        Logo
    },

    methods: {
        mostrarlista1(): void {
            this.topicos1 = !this.topicos1 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        mostrarlista2(): void {
            this.topicos2 = !this.topicos2 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        forceRerender():void {
        this.contadorOpenClose += 1
        },
        sidebartoggle(): void {
            this.sidebarvisible = !this.sidebarvisible,
            this.forceRerender()
        }
            //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        
        /* SE PRECISO FOR... ESSA FUNÇÃO REMOVE/SUBSTITUI ACENTOS, ESPAÇOS E LETRAS MAIÚSCULAS
        convertpath(item: string): void {
            this.path = item.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, '');

        }*/
    

    }


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
    min-width: 300px;
    min-height: 100vh;
    height: auto;
    background-color: rgb(190, 190, 190);
    transition: all 0.2s ease;
    padding: 10px;
  
}
.openclose {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: gray;
    }

.sidebarfechado {
    width: 0%;
    min-width: 0px;
}

@media only screen and (max-width: 600px) {

.sidebar {
    min-width: 95vw;
    }

.sidebarfechado {
    width: 0%;
    min-width: 0px;
}
    
}
</style>
