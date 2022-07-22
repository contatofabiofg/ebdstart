<template>
    <div class="sidebar d-flex flex-column align-items-center" :class="{ 'sidebarfechado': sidebarvisible }">
    <div class="openclosearea">
        <Openclose @click="sidebartoggle" />
        </div>
        <Logo />
        <DarkMode @click="mudarmodo()" :texto="`${textodobotao}`"/>
        <div class="campoinput">
            <input class="input form-control" placeholder="Encontrar" v-model="busca" @keyup="realizarbusca(busca)" />
        </div>
        <MenuPrincipal v-if="campobuscavazio"/>
        <MenuBusca v-else :buscar="busca2" />
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Openclose from "@/components/Openclose.vue";
import postagem from "@/posts";
import Logo from "@/components/Logo.vue";
import DarkMode from "@/components/DarkMode.vue";
import _ from 'lodash';
import MenuPrincipal from './MainMenu.vue';
import MenuBusca from './SearchMenu.vue';

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
            mododarkativado: false,
            
        }
    },
    computed: {
        textodobotao(): string {
            if(this.mododarkativado) {
                return "Modo Claro"
            } else {
                return "Modo Escuro"
            }


        }
    },
    emits: ["trocarModo"],
    components: {
        Openclose,
        Logo,
        MenuPrincipal,
        MenuBusca,
        DarkMode
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
        },
        mudarmodo() {
        this.$emit("trocarModo");
        this.mododarkativado = !this.mododarkativado
    }
    }
});
</script>
<style scoped>

.openclosearea {
    width: 100%
}

.sidebar {
    min-width: 300px;
    min-height: 100vh;
    height: auto;
    background-color: var(--sidebarbg);
    transition: all 0.2s ease;
    
}

.sidebarfechado {
    width: 0%;
    min-width: 0px;
}
.campoinput {
    overflow: hidden;
}
.input {
    background-color: var(--bg);
    color: var(--texto);
    border: none;
    position: relative;
    margin-bottom: 10px;
    width: 250px;
}
.input:focus {
     background-color: var(--bg);
    color: var(--texto);
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
