<template>
  <div class="home d-flex flex-column justify-content-center align-items-center">

    <div class="topbar d-flex flex-row justify-content-between align-items-center">
      <div>help</div>
      <div class="logo"></div>
      <div>contribute</div>
    </div>

    <div class="inputarea d-flex flex-row justify-content-center align-items-center">
      <input class="form-control" placeholder="Buque por livro ou assunto" v-model="busca"
        @keyup="realizarbusca(busca)" />
    </div>

    <div class="menuarea d-flex flex-row justify-content-center align-items-center">
      <transition name="menuroute" mode="out-in">
      <router-view v-slot="{ Component }" v-if="campobuscavazio">
        <transition name="menuroute" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <SearchOptions v-else :search="busca2" />
      </transition>


    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchOptions from "@/components/SearchOptions.vue"
import { simplefystring } from "@/functions/simplefystring"



export default defineComponent({
  name: 'HomeV',
  data() {
    return {

      busca: "",
      busca2: "",
      campobuscavazio: true,
      botaoencontrado: false,
      timeout: 0,
      mododarkativado: false,

    }
  },

  methods: {
    simplefystring,

    realizarbusca(dado: string): void {
      clearTimeout(this.timeout)
      let newstring = simplefystring(dado)
      this.timeout = setTimeout(() => {
        this.busca2 = newstring
        if (newstring == "") {
          this.campobuscavazio = true
        }
        else {
          this.campobuscavazio = false;
        }
      }, 500)
    }
  },
  components: {
    SearchOptions,
  }

});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.home {
  width: 100vw;
  height: 100%;
  margin-top: 10px;
}

.logo {
  width: 200px;
  
  height: 20px;
  background-image: url("../../public/escolabiblicaonline.png");
  background-position: center;
  background-size: cover;
}

.topbar,
.inputarea,
.menuarea {
  position: relative;
  background-color: rgba(255, 255, 255, 0.7);
  width: 900px;
  max-width: 90vw;
  height: auto;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;

}

input {
  width: 100%;
  max-width: 80vw;
  box-shadow: -5px 5px 25px rgb(236, 236, 236);
}

.menuroute-enter-from {
  transform: translateX(30px);
  opacity: 0;
}



.menuroute-enter-active {
  transition: 0.2s ease all;

}

.menuroute-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.menuroute-leave-active {
  transition: 0.2s ease all;
}

@media (max-width: 500px) {  
.logo {
  transform: scale(50%)
}
}
</style>
