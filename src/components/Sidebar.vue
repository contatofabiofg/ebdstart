<template>


    <div class="sidebar" :class="{ 'sidebarfechado': sidebarvisible }">
        <Openclose @click="sidebartoggle" :info="sidebarvisible" :key="contadorOpenClose" />
        <Logo />
        <div class="campoinput">
            <input class="input form-control" placeholder="Encontrar" v-model="busca" @keyup="realizarbusca(busca)" />
        </div>

        <div v-if="campobuscavazio">
        {{requisicaoteste("rodando1")}}
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
        <div v-else >


             {{requisicaoteste("rodando2")}}
            <div v-for="(item, index) in postagem" :key="index"> 
                
                <router-link v-if="item.titulo.toLowerCase().startsWith(busca.toLowerCase()) && busca !== ''" style="text-decoration: none; color: inherit;"
                    :to="item.path" @click="sidebartoggle">
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
import _ from 'lodash';



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
            contadorOpenClose: 0,
            busca: "",
            busca2: "",
            tituloeditado: "",
            campobuscavazio: true,
            botaoencontrado: false,
            timeout: 0,
            
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
            console.log("rodando")
            this.topicos1 = !this.topicos1 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        mostrarlista2(): void {
            this.topicos2 = !this.topicos2 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        forceRerender(): void {
            this.contadorOpenClose += 1
        },
        sidebartoggle(): void {
            this.sidebarvisible = !this.sidebarvisible,
                this.forceRerender()
        },

        simplificartexto(string: string): string {
            return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, '');

        },
        
        realizarbusca(dado: string): void {

            clearTimeout(this.timeout)
            this.busca2 = this.busca
            
            this.timeout = setTimeout(() => {
                
                if (dado == "") {
                    this.campobuscavazio = true
                }
                else {
                    this.campobuscavazio = false;
                }
            }, 500)
           
            
        },

        requisicaoteste(texto: string): void {
            console.log(texto)
        }

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

.campoinput {
    overflow: hidden;

}

.input {
    border: none;
    position: relative;
    margin-bottom: 10px;
}

.form-control:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
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
