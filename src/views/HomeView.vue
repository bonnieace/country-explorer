<script setup>
import CountryList from '@/components/countryList.vue';
import Search from '@/components/search.vue';

import { useCounterStore } from '@/stores/counter';
const store=useCounterStore()



</script>

<template>
  <main >
    <Search/>
   
    <CountryList/>
 
  </main>
</template>
