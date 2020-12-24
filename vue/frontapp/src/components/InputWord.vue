<template>
    <div class="input-word">
        <input class="keyword-input" v-model="input" type="text" placeholder="キーワードを入力">
        <button class="search-button" @click="emitClick"><img src="../assets/glass.png" width="20px" height="20px"></button> 
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class InputWord extends Vue  {
    public input = "";

    @Emit('click')
    public emitClick(){
        return this.input;
    }
}
</script>

<style lang="sass" scoped>
$base-color: #41b983
.input-word
    .keyword-input
        width: 500px
        height: 2.5em
        font-size: 20px
        border: 1px $base-color solid
    .search-button
        width: 50px
        height: 2.7em
        font-size: 20px
        border: 1px solid $base-color
        background-color: $base-color
</style>