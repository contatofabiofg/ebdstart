<template>
  <div @click="mudarsetinha"
    class="botaotopico w-100 font-weight-bold d-flex flex-row justify-content-between align-items-center cursor-pointer overflow-hidden">
    <div class="nome d-flex flex-row justify-content-around align-items-center">
      <img src="../../public/book.png" class="menuicon" />
      <strong>{{ texto! }}</strong>
    </div>
    
    <div class="menuarrow" :class="{arrowvirada: seta}"></div>
    
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BotaoTopicoC',
  data() {
    return {
      seta: false
    }
  },
  props: {
    texto: String,
  },
  methods: {
    mudarsetinha() {
      this.seta = !this.seta
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.botaotopico {
  background-color: var(--botaocor);
  color: var(--texto);
  height: 70px;
  font-family: Arial;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid gray;

}

.botaotopico:hover {
  background-color: var(--botaocorover);

}
.nome {
  margin-left: 10px
}

.menuicon {
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: cover;
  transform: 0, 2s all ease;
}

.menuarrow {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background-image: url("../../public/arrow.png");
  background-position: center;
  background-size: cover;
  transition: 0,5s all ease;
}
.arrowvirada {
  transform: rotate(90deg);
}

img {
  margin-right: 5px;
}

</style>
