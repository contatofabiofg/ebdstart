<template>
  <div class="hello">
    <Editor/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Editor from "@/components/Editor.vue"


export default defineComponent({
  name: 'NovaPostagemV',
  components: {
    Editor
  }
 
});
</script>


<style scoped>

</style>
