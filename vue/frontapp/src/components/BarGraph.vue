<template>
    <div class="bar-graph">
        <BarChart :chart-data="chartData" :chart-options="chartOptions"/>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue, Watch } from "vue-property-decorator";
import BarChart from "../components/BarChart.vue";
import Chart from "chart.js";

@Component({
    components: {
        BarChart
    },
})

export default class BarGraph extends Vue  {
    @Prop({ type: Array, default: ()=>[]}) 
    public wordsRankingData!:{word:string, score:number}[];
    
    protected get chartOptions(){
        const chartOptions = {};
        return chartOptions;
    }
    

    protected get chartData(){
        const datas = this.wordsRankingData.slice(0,10).map(x => x.score); 
        const labels = this.wordsRankingData.slice(0,10).map(x => x.word);
        const chartData = {
            labels: labels,
            datasets: [{
                label: "score",
                type: "bar",
                data: datas,
                backgroundColor: "#41b983"
            }]
        };
        return chartData;
    }
}
</script>

<style lang="sass" scoped>
.bar-graph 
    position: relative
    width: 600px
    height: 300px
    margin-left: auto
    margin-right: auto
</style>