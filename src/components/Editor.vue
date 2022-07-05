<template>
<div class="areaeditor">
  <div class="texto">Título</div>
  <input type="text" v-model="titulo"/>
  <div class="texto">Subtítulo</div>
  <input type="text" v-model="subtitulo"/>
  <div class="texto">Endereço</div>
  <input type="text" v-model="path"/>
  <div class="texto">Texto</div>
<QuillEditor v-model:content="html" contentType="html" theme="snow" />
  <div class="save" @click="save()">Salvar</div>
</div>
  

</template>

<script lang="ts">


import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import postagem from "@/posts";
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'editorC',
  data() {
    return { 
      titulo: "",
      subtitulo: "",
      path: "",
      html: "",
      postagem
  }},
  components: {
    QuillEditor,
    
  },
  methods: {
    save() {
        var post = {
        path: this.path,
        titulo: this.titulo,
        subtitulo: this.subtitulo,
        texto: `${this.html}`,
        imagem: ""
      }
      this.postagem.push(post)
    }
  }
});
</script>

<style scoped>
.areaeditor {
  width: 800px;
  height: 250px;
  margin-left: 40px;
  margin-top: 40px;
  color: var(--texto);
  
}
.texto {
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
}
input {
  background-color: var(--bg);
  color: var(--texto)
}
.save {
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  border: 2px solid black;
  padding: 10px;
  display: inline-block;
}
</style>