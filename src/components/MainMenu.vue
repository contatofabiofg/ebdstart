<template>
    <div class="mainmenu d-flex flex-row flex-wrap justify-content-center align-items-center">
        {{ requisicaoteste("Menu Principal Carregado") }}
        <router-link to="/velhotestamento">
            <TopicButton2 title="Título de Teste" color="rgb(90, 86, 64)" image="at.jpg" />
        </router-link>
        <router-link to="/velhotestamento">
            <TopicButton2 title="Título de Teste2" color="rgb(120, 86, 64)" image="nt.jpg" />
        </router-link>
        <router-link to="velhotestamento">
            <TopicButton2 title="Título de Teste3" color="rgb(40, 86, 64)" image="baptism.png" />
        </router-link>
        <router-link to="velhotestamento">
            <TopicButton2 title="Título de Teste4" color="rgb(90, 6, 64)" image="scribe.jpg" />
        </router-link>

        <TopicButton title="Dicionário" color="rgb(120, 86, 64)"/>
        <TopicButton title="Mídias" color="rgb(120, 86, 64)"/>
        <TopicButton title="Orientações" color="rgb(120, 86, 64)"/>
        <TopicButton title="Contribua" color="rgb(120, 86, 64)"/>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopicButton from "@/components/TopicButton.vue"
import TopicButton2 from "@/components/TopicButton2.vue"
import posts from "@/posts"
import exercicio from "@/exercicios"



export default defineComponent({
    name: 'MenuPrincipalC',
    data() {
        return {

            topicos1: false,
            topicos2: false,
            topicos3: false,
            menuexercicios: false,
            posts,
            exercicio,
            timeout: 0,

        }
    },
    mounted() {
        document.documentElement.style.setProperty('--tamanhomenu1', `${(31 * (this.posts.length + 1))}px`);
        document.documentElement.style.setProperty('--tamanhomenu2', `${(31 * (this.posts.length + 1))}px`);
        document.documentElement.style.setProperty('--tamanhotemas', `${(31 * (this.posts.length + 1))}px`);
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
        TopicButton,
        TopicButton2
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

.mainmenu {
    width: 1000px;
    overflow: hidden;
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
