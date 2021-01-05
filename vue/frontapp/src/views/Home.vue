<template>
  <div class="home">
    <AppPage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import AppPage from "../components/AppPage.vue";


@Component({
  components: {
    AppPage
  }
})

export default class Home extends Vue {}

</script>

