<template>
  <div class="home">
  {{forceRerender()}}
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
  data() {
        return {
            url: window.location.pathname,
             componentKey: 0
           
        }
    },
    methods: {
    forceRerender():void {
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
