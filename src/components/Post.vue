<template>
    <div class="post" v-for="(item, index) in postagem" :key="index">
      
        {{ acharpost(item.path) }}

        <div v-if="exibir">
            <h1>{{ item.titulo }}</h1>
            <h2>{{ item.subtitulo }}</h2>
            <p>{{ item.texto }}</p>
        </div>
        {{ resetarexibicao() }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import postagem from "@/posts"


export default defineComponent({
    name: 'PostC',
    data() {
        return {
            url: window.location.pathname,
            postagem,
            exibir: false,
            renderizador: 0

        }

    },
    methods: {
        acharpost(item: string): void {
            if (item == this.url) {
                this.exibir = true
            }
            window.scrollTo(0,0)
        },
        resetarexibicao(): void {
            this.exibir = false
        },

    
    }
    
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Proza+Libre');
h1 {
    font-family: 'Proza Libre', sans-serif;
    color: seagreen;
    font-weight: 300;
}
.post {
    margin-left: 50px;
    font-family: "Fascinate"
}
</style>
