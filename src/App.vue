<template>
  <div class="painel d-flex flex-row ">
    <Sidebar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from "@/components/Sidebar.vue"

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
  }
});
</script>
<style scoped>
.painel {
  overflow-x: hidden;
}
</style>
