<template>
    <div class="submenu d-flex flex-row flex-wrap">
          <router-link to="/">
             <SmallButton title="Voltar" color="188, 71, 73" image="back.png"/>
          </router-link>
      <transition-group @before-enter="beforeEnter" @enter="enter" appear >
      <div v-for="(item, index) in posts" :key="index" :data-index="index"> 
      
        <router-link v-if="item.path.split('/')[1] == url.split('/')[1]" :to="item.path">
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
            posts,
            exercicio,
            timeout: 0,
            time: "",
            url: window.location.pathname

        }
    },
    
    methods: {
        beforeEnter(el: HTMLElement){
            el.style.opacity = "0";
            el.style.transform = "translateY(-30px)"
        },
        enter(el: HTMLElement, done: any) {
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


    },
    components: {
        SmallButton,
            }

});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
a {
  text-decoration: none;
 }
</style>
