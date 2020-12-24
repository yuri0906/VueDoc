<template>
<div class="loading" v-if="isLoading">
    <vue-loading type="cylon" color="#41b983" :size="{ width: '50px', height: '50px'}"></vue-loading>
</div>
</template>

<script lang="ts">
import { VueLoading } from 'vue-loading-template';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        VueLoading
    },
})

export default class LoadingDisplay extends Vue  {
    @Prop({ type: Boolean, default: false})
    public isLoading!:boolean;

}
</script>

<style lang="sass" scoped>
.loading
    margin-top: 30px
    margin-bottom: 30px
</style>