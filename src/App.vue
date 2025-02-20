<script setup>
import {RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import { useCounterStore } from './stores/counter';
const store=useCounterStore()
import { PulseLoader } from 'vue3-spinner';
import CustomLoader from './components/customLoader.vue';

</script>

<template>
  <div class="bg-gray-100 p-8 dark:bg-gray-900">
    <navbar/>
    <CustomLoader/>



  <RouterView  />
  </div>
  
</template>
