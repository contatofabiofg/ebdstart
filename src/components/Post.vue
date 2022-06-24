<template>
    <div class="post" v-for="(item, index) in postagem" :key="index">
        
        <div v-if="item.path == url">
            <h1>{{ item.titulo }}</h1>
            <h2>{{ item.subtitulo }}</h2>
            <p v-html="item.texto"></p>
            <div class="topo" @click="topo">Voltar para o topo</div>
        </div>
       
    </div>
 </template>

<script lang="ts">
import { defineComponent } from 'vue';
import postagem from "@/posts"


export default defineComponent({
    name: 'PostC',
    emits: ['quandobuscado'],
    data() {
        return {
            url: window.location.pathname,
            postagem,
        }
    },
    methods: {     
        topo(): void {
            window.scrollTo(0,0)
        },
        }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap');

.post {
    font-family: 'Roboto';
    margin: 50px;
    width: 75%;
    word-wrap: break-word;
    }
h1 {
    font-weight: 900;
}
h2 {
    font-weight: 300;
    font-size: 20px;
    font-style: italic;
}
p {
    margin-top: 20px;
}
.topo {
    font-weight: bold;
    cursor: pointer
}
</style>
