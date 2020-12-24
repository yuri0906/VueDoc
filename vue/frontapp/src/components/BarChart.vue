<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { Bar, mixins } from "vue-chartjs";
import Chart from "chart.js";

@Component
export default class BarChart extends Mixins(Bar, mixins.reactiveProp){
    @Prop({ type: Object, default: {}}) 
    public chartData!: Chart.ChartData;

    @Prop({ type: Object, default: {}})  
    public chartOptions!: Chart.ChartOptions;

    public mounted() {
        this.renderChart(this.chartData,this.chartOptions);
    }
}
</script>
