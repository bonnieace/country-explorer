<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useCounterStore(); 

const countryCode = ref(route.params.countryCode);


const country = computed(() => {
  return store.countries.find(c => c.cca2 === countryCode.value || c.cca3 === countryCode.value);
});

watchEffect(() => {
  countryCode.value = route.params.countryCode;
});
</script>

<template>
  <div v-if="country" class="bg-white shadow-xl rounded-lg overflow-hidden max-w-5xl mx-auto dark:bg-gray-700 dark:text-white">
    <!-- Flag Section -->
    <div class="relative">
      <img :src="country.flags.png" :alt="`${country.name.common} flag`" class="w-full h-64 object-fit">
      <div class="absolute bottom-0 bg-black/50 text-white p-4 w-full">
        <h2 class="text-2xl md:text-3xl font-bold">{{ country.name.official }}</h2>
        <p class="text-lg">{{ country.name.common }}</p>
      </div>
    </div>

    <!-- Info Section -->
    <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">🌍 Capital</p>
        <p class="text-gray-700 dark:text-gray-300">{{ country.capital ? country.capital[0] : "N/A" }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow-sm dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">📍 Subregion</p>
        <p class="text-gray-700 dark:text-gray-300">{{ country.subregion }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow-sm dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">🗣️ Languages</p>
        <p class="text-gray-700 dark:text-gray-300">{{ Object.values(country.languages || {}).join(', ') }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow-sm dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">💰 Currencies</p>
        <p class="text-gray-700 dark:text-gray-300">{{ Object.values(country.currencies || {}).map(c => c.name).join(', ') }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow-sm dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">⏳ Time Zones</p>
        <p class="text-gray-700 dark:text-gray-300">{{ country.timezones.join(', ') }}</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow-sm dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">📏 Area</p>
        <p class="text-gray-700 dark:text-gray-300">{{ country.area.toLocaleString() }} km²</p>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow-sm col-span-1 sm:col-span-2 dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">👥 Population</p>
        <p class="text-gray-700 dark:text-gray-300">{{ country.population.toLocaleString() }}</p>
      </div>

      <!-- Border Countries Section -->
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm col-span-1 sm:col-span-2 dark:bg-gray-600">
        <p class="text-gray-800 font-semibold dark:text-gray-200">🚩 Border Countries</p>
        <div class="flex flex-wrap gap-2">
          <button v-for="border in country.borders" :key="border" class="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-400">
            {{ border }}
          </button>
          <span v-if="!country.borders || country.borders.length === 0">No bordering countries</span>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="p-6">
      <iframe
        width="100%"
        height="300"
        frameborder="0"
        style="border:0"
        :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyCqu8_X3mcgA37R9T29e6RPW80sd7S6Z9o&q=${country.name.common}`"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <div v-else class="text-center text-gray-600 dark:text-gray-300 mt-10">
    <p>Country not found!</p>
  </div>
</template>
