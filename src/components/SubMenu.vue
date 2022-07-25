<template>
    <div class="submenu d-flex flex-row flex-wrap">
          <router-link to="/">
             <SmallButton title="Voltar" color="188, 71, 73" image="back.png"/>
          </router-link>
      <transition-group @before-enter="beforeEnter" @enter="enter" appear >
      <div v-for="(item, index) in posts" :key="index" :data-index="index"> 
      
        <router-link :to="item.path">
            <SmallButton :title="item.title" :color="item.color" image="book.png"/>
        </router-link>
       
        </div> 
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmallButton from "@/components/SmallButton.vue"
import posts from "@/posts"
import exercicio from "@/exercicios"
import gsap from "gsap"



export default defineComponent({
    name: 'SubmenuC',
    data() {
        return {

            topicos1: false,
            topicos2: false,
            topicos3: false,
            menuexercicios: false,
            posts,
            exercicio,
            timeout: 0,
            time: ""

        }
    },
    
    methods: {
        beforeEnter(el: HTMLElement): void {
            el.style.opacity = "0";
            el.style.transform = "translateY(-30px)"
        },
        enter(el: HTMLElement, done: any):void {
            if (el.dataset.index) {
            this.time = el.dataset.index
            }
          
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                onComplete: done,   
                delay: parseInt(this.time) * 0.1

            })
        },

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
        SmallButton,
            }

});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.submenu {
    
    width: 700px;
    max-width: 90vw;
    margin-top: 20px;
    overflow: hidden;
    }
 a {
  text-decoration: none;
 }


</style>
