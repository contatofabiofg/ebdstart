<template>
  <div class="cadastro m-5 w-75 text-break">
    <div class="telas p-2">
      <transition name="fade">

        <div v-if="tela == 0">
          <label class="label" for="nome">Nome:</label>
          <input type="text" v-model="nome" name="nome" placeholder="Insira seu nome" />
        </div>

        <div v-else-if="tela == 1">
          <label class="label" for="endereco">Endereço: </label>
          <input type="text" v-model="endereco" name="endereco" placeholder="Insira seu endereço" />
        </div>

        <div v-else-if="tela == 2">
          <label class="label" for="telefone">Telefone: </label>
          <input type="text" v-model="telefone" name="telefone" placeholder="Insira seu telefone" />
        </div>

        <div v-else-if="tela == 3">
          <p>Seu nome: {{ nome }}</p>
          <p>Seu endereço: {{ endereco }}</p>
          <p>Seu telefone: {{ telefone }}</p>
        </div>
        <div v-else-if="tela == -1">

        </div>

      </transition>
    </div>
    <div class="d-flex flex-row">
      <div class="botaoguia my-1 d-flex justify-content-center align-items-center" @click="voltar">Voltar
      </div>
      <div class="botaoguia my-1 d-flex justify-content-center align-items-center" @click="avancar">Avançar
      </div>
    </div>

  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CadastroC',
  data() {
    return {
      nome: "",
      endereco: "",
      telefone: "",
      tela: 0,
      interval: 0
    }
  },
  computed: {

  },
  emits: ["modelo"],
  components: {

  },
  methods: {
    voltar() {
      if (this.tela > 0) {
        clearTimeout(this.interval);
        let temp = this.tela;
        this.tela = -1;
        console.log("voltar");
        this.interval = setTimeout(() => {
          this.tela = temp;
          this.tela--
        }, 400);

      }
    },
    avancar() {
      if (this.tela < 3) {
        clearTimeout(this.interval);
        let temp = this.tela;
        this.tela = -1;
        console.log("avançar");
        this.interval = setTimeout(() => {
          this.tela = temp;
          this.tela++
        }, 400);

      }
    }

  }
});
</script>

<style scoped>
.cadastro {
  background-color: var(--bg);
  color: var(--texto);
  font-family: 'Roboto';
 }

.telas {
  height: 200px;
  width: 400px;
  border: 1px solid rgb(221, 221, 221);
  }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {

  opacity: 0;
}

.label {
  margin-right: 10px;
}

.botaoguia {
  background-color: var(--botaocor2);
  color: var(--texto);
  height: 50px;
  width: 100px;
  margin-right: 15px;
  cursor: pointer;
  font-size: 15px;
  overflow: hidden;
}

.botaoguia:hover {
  background-color: var(--botaocorover2);
}
</style>
