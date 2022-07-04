<template>
    <div class="post" v-for="(item, index) in postagem" :key="index">

        <div v-if="item.path == url">
            <h1>{{ item.titulo }}</h1>
            <h2>{{ item.subtitulo }}</h2>
            <p v-html="item.texto"></p>
            <div class="topo" @click="topo">Voltar para o topo</div>
            <div class="imprimir" @click="imprimir(item.titulo, item.subtitulo, item.texto)">Imprimir</div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import postagem from "@/posts";
import { jsPDF } from "jspdf";
import datalogo from "@/assets/datalogo"


export default defineComponent({
    name: 'PostC',
    emits: ['quandobuscado'],
    data() {
        return {
            url: window.location.pathname,
            postagem,
            datalogo
        }
    },
    methods: {
        topo(): void {
            window.scrollTo(0, 0)
        },
        imprimir(titulo: string, subtitulo: string, texto: string): void {
            const doc = new jsPDF("p", "px", "a4");
           
            var imgData = datalogo[0];

            doc.addImage(imgData, 'JPEG', 200, 20, 50, 50)

            doc.setFont('helvetica', "bold");
            doc.setFontSize(20);
            doc.text(titulo, 180, 80);

            doc.setFont('times', "italic");
            doc.setFontSize(15);
            doc.text(subtitulo, 180, 90, {maxWidth: 170});

            doc.setFont('courier', "normal");
            doc.setFontSize(10);
            //doc.text(texto, 20, 80, {maxWidth: 170});
            doc.html(`<div style="width:1350px; font-size:20px">${texto}</div>`, {
                x: 20,
                y: 120,
                
                html2canvas: {
                    scale: (doc.internal.pageSize.width - 40) / document.body.scrollWidth
                },
                
                callback: function (doc) {
                doc.autoPrint();
                doc.output('dataurlnewwindow');
            }
        })

            //doc.autoPrint();
            //doc.output('dataurlnewwindow');
        }
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap');

.post {
    background-color: var(--bg);
    color: var(--texto);
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

.topo, .imprimir {
    font-weight: bold;
    cursor: pointer
}
</style>
