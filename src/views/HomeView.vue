<template>
  <div class="home">
    <Post :key="componentKey"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Post from "@/components/Post.vue"

export default defineComponent({
  name: 'HomeView',
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
.home {
  max-width: 75%;
}
</style>
