<template>
    <div class="sidebar" :class="{ 'sidebarfechado': sidebarvisible }">
        <Openclose @click="sidebartoggle" :info="sidebarvisible" :key="contadorOpenClose" />
        <Logo />
        <div class="campoinput">
            <input class="input form-control" placeholder="Encontrar" v-model="busca" @keyup="realizarbusca(busca)" />
        </div>
        <MenuPrincipal v-if="campobuscavazio"/>
        <MenuBusca v-else :buscar="busca2" />
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Openclose from "@/components/Openclose.vue"
import postagem from "@/posts"
import Logo from "@/components/Logo.vue"
import _ from 'lodash';
import MenuPrincipal from './MenuPrincipal.vue';
import MenuBusca from './MenuBusca.vue';

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
            campobuscavazio: true,
            botaoencontrado: false,
            timeout: 0,
        }
    },
    components: {
        Openclose,
        Logo,
        MenuPrincipal,
        MenuBusca
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
            this.timeout = setTimeout(() => {
                this.busca2 = this.busca                
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
