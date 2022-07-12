<template>
    <div id="menuprincipal" class="d-flex flex-column justify-content-center align-items-center">
        {{ requisicaoteste("Menu Principal Carregado") }}
        <BotaoTopico texto="Tópico" imagem="book.png" setaid="topico1" :arrow="true" @click="mostrarlista1" />
        <transition name="menu1">
            <div v-if="topicos1" class="submenu">
                <div v-for="(item, index) in postagem" :key="index">
                    <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                        <Botao :texto="item.titulo" />
                    </router-link>
                </div>
            </div>
        </transition>
        
        <BotaoTopico texto="Tópico2" imagem="book.png" setaid="topico2" :arrow="true" @click="mostrarlista2" />
        <transition name="menu2">
        <div v-if="topicos2">

            <div v-for="(item, index) in postagem" :key="index">
                <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                    <Botao :texto="item.titulo" />
                </router-link>
            </div>

        </div>
        </transition>
        <BotaoTopico texto="Tópico2" imagem="book.png" setaid="topico3" :arrow="true" @click="mostrarlista2" />
        <transition name="menutemas">
        <div v-if="topicos2">

            <div v-for="(item, index) in postagem" :key="index">
                <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                    <Botao :texto="item.titulo" />
                </router-link>
            </div>

        </div>
        </transition>
        <BotaoTopico texto="Exercícios" imagem="book.png" setaid="topico4" :arrow="true" @click="mostrarexercicios" />
        <transition name="menuexercicios">
        <div v-if="menuexercicios">
            <div v-for="(item, index) in exercicio" :key="index">
                <router-link style="text-decoration: none; color: inherit;" :to="item.path">
                    <Botao :texto="item.nome" />
                </router-link>
            </div>
        </div>
        </transition>
        <router-link style="text-decoration: none; color: inherit;" to="novapostagem">
            <BotaoTopico texto="Nova Postagem" imagem="" :arrow="false" />
        </router-link>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Botao from "@/components/Botao.vue"
import BotaoTopico from "@/components/BotaoTopico.vue"
import postagem from "@/posts"
import exercicio from "@/exercicios"



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
    mounted() {
        document.documentElement.style.setProperty('--tamanhomenu1', `${(31 * (this.postagem.length + 1))}px`);
        document.documentElement.style.setProperty('--tamanhomenu2', `${(31 * (this.postagem.length + 1))}px`);
        document.documentElement.style.setProperty('--tamanhotemas', `${(31 * (this.postagem.length + 1))}px`);
        document.documentElement.style.setProperty('--tamanhoexercicios', `${(31 * (this.exercicio.length + 1))}px`);
    },

    methods: {
        requisicaoteste(texto: string): void {
            console.log(texto)
        },
        mostrarlista1(): void {
            this.topicos1 = !this.topicos1; //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        mostrarlista2(): void {
            this.topicos2 = !this.topicos2 //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        },
        mostrarexercicios(): void {
            this.menuexercicios = !this.menuexercicios //esse código retorna um true ou false, ou seja, o retorno será o retorno dessa operação de comparação
        }

    },
    components: {
        BotaoTopico,
        Botao,
    }

});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
    --tamanhomenu1: 31px;
    --tamanhomenu2: 0;
    --tamanhomenutemas: 0;
    --tamanhomenuexercicios: 0;
     }

#menuprincipal {
    width: 100%;
    overflow:hidden;
}
.submenu {
    overflow: hidden
}
.menu1-enter-active {
    animation: menu1-in 0.5s;
}
.menu1-leave-active {
    animation: menu1-in 0.5s reverse;
}
.menu2-enter-active {
    animation: menu2-in 0.5s;
}
.menu2-leave-active {
    animation: menu2-in 0.5s reverse;
}
.menutemas-enter-active {
    animation: menutemas-in 0.5s;
}
.menutemas-leave-active {
    animation: menutemas-in 0.5s reverse;
}
.menuexercicios-enter-active {
    animation: menuexercicios-in 0.5s;
}
.menuexercicios-leave-active {
    animation: menuexercicios-in 0.5s reverse;
}

@keyframes menu1-in {
    0% {
        max-height: 0px;
        transition: max-height ease;
    }
    100% {
        max-height: var(--tamanhomenu1);
        transition: max-height ease;
    }
}
@keyframes menu2-in {
    0% {
        max-height: 0px;
        transition: max-height ease;
    }
    100% {
        max-height: var(--tamanhomenu2);
        transition: max-height ease;
    }
}
@keyframes menutemas-in {
    0% {
        max-height: 0px;
        transition: max-height ease;
    }
    100% {
        max-height: var(--tamanhotemas);
        transition: max-height ease;
    }
}
@keyframes menuexercicios-in {
    0% {
        max-height: 0px;
        transition: max-height ease;
    }
    100% {
        max-height: var(--tamanhoexercicios);
        transition: max-height ease;
    }
}
</style>
