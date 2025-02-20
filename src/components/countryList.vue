`<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCounterStore } from '@/stores/counter';
import { PulseLoader } from 'vue3-spinner';
const store=useCounterStore()


</script>
<template >
    <div v-if="store.countries.length<=0"class="flex flex-col  items-center justify-center max-h-screen w-full text-gray-600 dark:text-gray-300 mt-10">
    <p class="text-2xl font-semibold">😢 No countries found!</p>
  </div>

 <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div v-for="(country, index) in store.countries" :key="index" >
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer dark:bg-gray-700 dark:text-white">
      <img :src="country.flags.png" alt=" flag" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2">{{ country.name.common }}</h2>
                        <p class="text-gray-600 dark:text-gray-300"><span class="font-medium">🌍 Region: </span>{{country.region}}</p>
                        <p class="text-gray-600 dark:text-gray-300"><span class="font-medium">👥 Population: </span>{{ country.population.toLocaleString() }} </p>
                        <p class="text-gray-600 dark:text-gray-300"><span class="font-medium">🏙️ Capital: </span>{{  Array.isArray(country.capital) ? country.capital.join(', ') : country.capital}}</p>
                    </div>
    </div>
   </div>
</div>

</template>`