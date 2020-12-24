<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppPage from "../components/AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class Home extends Vue {}
</script>
