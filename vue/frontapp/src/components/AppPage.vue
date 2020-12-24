<template>
    <div class="app-page">
        <h1>商品検索+テキスト解析のVueApp</h1>
        <InputWord @click="fetchRankingData"/>
        <LoadingDisplay :is-loading="isLoading"/>
        <div class="result" v-if="isShow">
            <WordsRanking :words-ranking-data="wordsRankingData"/>
            <BarGraph :words-ranking-data="wordsRankingData"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Methods from '../server/methods';
import InputWord from '../components/InputWord.vue';
import LoadingDisplay from '../components/LoadingDisplay.vue'
import WordsRanking from '../components/WordsRanking.vue';
import BarGraph from '../components/BarGraph.vue';

@Component({
    components: {
        InputWord, WordsRanking, BarGraph, LoadingDisplay,
    }
})

export default class AppPage extends Vue  {
    private isShow = false;
    public isLoading = false;
    public wordsRankingData = [];

    private async fetchRankingData(input:string){
        this.isLoading = true;
        this.isShow = false; //２回目以降で前回の検索結果を隠す

        if(!input){ //入力が空欄の場合
            alert("キーワードを入力してください");
        }else if(input.length > 64){ //64文字以上の場合
            alert("検索文字数が多すぎます");
        }else{
            const response = await Methods.sendParams(input);
            this.wordsRankingData = response.data;
            if(Object.keys(this.wordsRankingData).length===0){ //検索結果が0だった場合
                alert("商品が見つかりませんでした");
            }else{
                this.isShow = true;
            }
        }
        this.isLoading = false;
    }
}
</script>

<style lang="sass" scoped>
.app-page
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>