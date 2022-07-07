<template>
<div class="areaeditor m-5">
  <div class="texto">Título</div>
  <input type="text" v-model="titulo"/>
  <div class="texto">Subtítulo</div>
  <input type="text" v-model="subtitulo"/>
  <div class="texto">Endereço</div>
  <input type="text" v-model="path"/>
  <div class="texto">Texto</div>
<QuillEditor v-model:content="html" contentType="html" theme="snow" />
  <div class="save d-inline-block p-2 m-2" @click="save()">Salvar</div>
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
  max-width: 1000px;
  height: 250px;
  color: var(--texto);
  
}
.texto {
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