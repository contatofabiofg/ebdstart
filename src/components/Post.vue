<template>


    <div v-for="(item, index) in posts" :key="index">

        <div class="postarea" v-if="item.path == url">
            <div>
                <router-link to="/">home</router-link>
                <div class="space d-inline">•</div>
                <router-link :to="`/` + getcategoryurl(url)">{{ item.category }}</router-link>
                <div class="space d-inline">•</div>
                <div class="d-inline">{{ item.title }}</div>
            </div>


            <div class="topheaderline d-flex flex-row justify-content-between align-items-center">
                <h1>{{ item.title }}</h1>
                <div class="postmenu">
                    <div class="printarea d-flex flex-row justify-content-between align-items-center" @click="imprimir(item.title, item.subtitle, item.text)">
                        <div class="printimage"></div>
                        <div class="printtext">Imprimir</div>
                    </div>
                </div>
            </div>
            <h2>{{ item.subtitle }}</h2>
            <p v-html="item.text"></p>
            <transition name="top">
            <div v-if="buttontopenable" class="top" @click="topo"></div>
           </transition>
        </div>

    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import posts from "@/posts";
import { jsPDF } from "jspdf";
import datalogo from "@/assets/datalogo";
import { popup } from "@/functions/popup"


export default defineComponent({
    name: 'PostC',
    emits: ['quandobuscado'],
    data() {
        return {
            url: window.location.pathname,
            posts,
            datalogo,
            buttontopenable: false
            
        }
    },
    

    mounted() {
        popup(),
        window.addEventListener("scroll", () => {this.buttontop()} )

    },
    methods: {
        buttontop() {
            console.log("chegou")
            if (window.scrollY > 100) {
                this.buttontopenable = true
            } else {
                 this.buttontopenable = false
            }
        },
       
        
        popup,
        getcategoryurl(url: string): string {
            let category = url.split("/");
            return category[1]
        },

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
            doc.text(subtitulo, 180, 90, { maxWidth: 170 });

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

        }
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap');

.postarea {

    color: var(--texto);
    font-family: 'Montserrat';
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 800px;
    max-width: 90vw;
    word-wrap: break-word;
}
.space {
    margin: 0px 10px;
}
a {
    text-decoration: none;
    color: rgb(188, 71, 73);
    font-weight: bold;
}
.topheaderline {
    margin-top: 20px;
}
.printarea {
    border: 2px solid gray;
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
    user-select: none;

}
.printimage {
  width: 15px;
  height: 15px;
  background-image: url("../../public/print.png");
  background-position: center;
  background-size:cover;
  margin-right: 5px;

}
.printtext {
    font-size: 12px;
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

.top {
    width: 35px;
    height: 35px;
    background-image: url("../../public/top.png");
    background-position: center;
    background-size:cover;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor:pointer;
}

.top-enter-from {
    transform: translateX(30px);
    opacity: 0;
}
.top-enter-active {
      transition: 0.2s ease all;
    }

.top-leave-to {
    transform: translateX(30px);
    opacity: 0;
}
.top-leave-active  {
    transition: 0.2s ease all;
}


</style>
