// BarChart.vue
<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


</script>

<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" />
</template>
