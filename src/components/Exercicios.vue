<template>
    <div class="post" v-for="(item, index) in exercicio" :key="index">

        <div v-if="item.path == url">
            <div v-for="(item2, index2) in item.perguntas" :key="(index2)">
                <h5>{{ item2.pergunta }}</h5>
                
                <div :class="'abc' + index2"> 
                
                    <div class="d-flex flex-row align-items-center" :key="(index2 * (Math.random() * 10))">
                        <input type="radio" :name="`${index2}`" @click="mostrarResposta(item2.tag, false)" />
                        <div :class="item2.tag" class="opcao errada fechada">{{ item2.errada }}</div>
                    </div>

                    <div class="d-flex flex-row align-items-center" :key="(index2 * (Math.random() * 10))">
                        <input type="radio" :name="`${index2}`" @click="mostrarResposta(item2.tag, false)" />
                        <div :class="item2.tag" class="opcao errada fechada">{{ item2.errada2 }}</div>
                    </div>

                    <div class="d-flex flex-row align-items-center" :key="(index2 * (Math.random() * 10))">
                        <input type="radio" :name="`${index2}`" @click="mostrarResposta(item2.tag, true)" />
                        <div :class="item2.tag" class="opcao certa fechada">{{ item2.certa }}</div>
                    </div>
                    
                </div>

                <hr />
               
            </div>

        </div>


        <div class="topo" @click="topo">Voltar para o topo</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import exercicio from "@/exercicios"


export default defineComponent({
    name: 'ExerciciosC',

    data() {
        return {
            url: window.location.pathname,
            exercicio,
            respondida1: false,
            acertos: 0,
            tentativas: 0,
            total: 0

        }
    },  
    mounted() { 
        for (let i = 0; i < 3; i++) {
        this.alterarordem(i.toString()) 
        this.alterarordem(i.toString())
        }
    },
    watch: {
        tentativas() {
            if(this.tentativas == 3) {
                alert(`você acertou ${this.acertos}/3`)

            }
        }

    },
    methods: {
        topo(): void {
            window.scrollTo(0, 0)
        },
        mostrarResposta(tag: string, tentativa: boolean) {
            if (tentativa) {
                this.acertos++
            }
            this.tentativas++;
            let elementos = document.querySelectorAll(`.${tag}`);
            elementos.forEach(elemento => {
                elemento.classList.remove('fechada');
            })
            

        },
        
        alterarordem(index: string): void {
                   
            let primeiroelemento = document.querySelector(".abc" + index)?.children[0];
              
            if ((Math.random() * 10) > 5 && primeiroelemento) {
                primeiroelemento?.parentNode?.removeChild(primeiroelemento);
                document.querySelector(".abc" + index)?.insertAdjacentElement('beforeend', primeiroelemento);
            }
        },
        totalacertos():void {
            this.total = this.acertos
        }
        
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

.opcao {
    margin-left: 10px;

}

.errada {
    color: red;
    text-decoration: line-through;
    filter: opacity(50%)
}

.certa {
    color: green;
}

.fechada {
    text-decoration: none;
    filter: opacity(100%);
    color: black;
}


.topo {
    font-weight: bold;
    cursor: pointer
}
</style>
