<template>
<div class="areaeditor m-5">
  <div class="text">Título</div>
  <input type="text" v-model="title"/>
  <div class="text">Subtítulo</div>
  <input type="text" v-model="subtitle"/>
  <div class="text">Cor</div>
  <input type="text" v-model="color"/>
    <div class="text">Categoria</div>
  <input type="text" v-model="category"/>
  <div class="text">Endereço</div>
  <input type="text" v-model="path"/>
  <div class="text">Texto</div>
<QuillEditor v-model:content="html" contentType="html" theme="snow" />
  <div class="save d-inline-block p-2 m-2" @click="save()">Salvar</div>
</div>
  

</template>

<script lang="ts">


import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import posts from "@/posts";
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'editorC',
  data() {
    return { 
      title: "",
      subtitle: "",
      path: "",
      html: "",
      color: "",
      category: "",
      posts
  }},
  components: {
    QuillEditor,
    
  },
  methods: {
    save() {
        var post = {
        path: this.path,
        color: this.color,
        title: this.title,
        category: this.category,
        subtitle: this.subtitle,
        text: `${this.html}`,
        image: ""
      }
      this.posts.push(post)
    }
  }
});
</script>

<style scoped>
.areaeditor {
  max-width: 1000px;
  height: 250px;
  color: var(--texto);
  
}
.text {
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
}
input {
  background-color: var(--bg);
  color: var(--texto);
  border: 1px solid;
}
.save {
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  border: 2px solid black;
  
  
}

</style>