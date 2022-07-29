<template>
  <div class="searchmenuarea d-flex flex-row flex-wrap">
  
    <div v-for="(item, index) in posts" :key="index">

      <router-link v-if="simplefystring(item.title).startsWith(search!.toLowerCase()) && search! !== ''"
        :to="item.path">
        <SmallButton :title="item.title" :color="item.color" image="book.png" />
      </router-link>


    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmallButton from "@/components/SmallButton.vue"
import posts from "@/posts"
import { simplefystring } from "@/functions/simplefystring"


export default defineComponent({
  name: 'SearchOptions',
  data() {
    return {
      posts,
      timeout: 0,
    }
  },
  props: {
    search: String

  },


  methods: {
    simplefystring,
    requisicaoteste(texto: string): void {
      console.log(texto)
    },

  },
  components: {

    SmallButton

  }

});

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchmenuarea {
  width: 100%;
  height: auto;
}
 a {
  text-decoration: none;
 }

</style>
