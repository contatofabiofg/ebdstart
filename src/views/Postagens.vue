<template>
<div>
      <Post :key="componentKey"/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Post from "@/components/Post.vue"

export default defineComponent({
  name: 'PostagensV',
  components: {
    Post
  },
  watch:{
    $route (){
        this.forceRerender()
    }
  },
  data() {
    return {
      url: window.location.pathname,
      componentKey: 0
    }
  },
  methods: {
    forceRerender():void {
    console.log("Post recarregado")
    this.componentKey += 1
    }
  }
});
</script>
<style>
.postarea {
 width: 750px;
 margin-left: 200px;
}


</style>
