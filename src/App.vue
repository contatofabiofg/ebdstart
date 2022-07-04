<template>
<main :class="{'mododark': mododarkative, 'modoclaro': !mododarkative}">
  <div class="painel d-flex flex-row">
    <Sidebar @trocarModo="alterarmodo()" />
    <router-view />
  </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from "@/components/Sidebar.vue"

export default defineComponent({
  name: 'App',
  data() {
    return {
      mododarkative: false
    }
  },
  components: {
    Sidebar,
  },
  methods: {
    alterarmodo() {
      this.mododarkative = !this.mododarkative
    }
  }
});
</script>
<style>
main {
  background-color: var(--bg);
}

.modoclaro {
  --bg: white;
  --texto: black;
  --botaocor: rgb(247, 247, 247);
  --botaocor2: rgb(190, 190, 190);
  --botaocorover: rgb(236, 236, 236);
  --botaocorover2: rgb(114, 114, 114);
  --sidebarbg: rgb(190, 190, 190);
  
}
.mododark {
  --bg: rgb(75, 75, 75);
  --texto: white;
  --botaocor: rgb(64, 51, 80);
  --botaocor2: rgb(64, 51, 80);
  --botaocorover: rgb(93, 75, 116);
  --botaocorover2: rgb(93, 75, 116);
  --sidebarbg: rgb(39, 39, 39);
}

.painel {
  overflow-x: hidden;
}
</style>
