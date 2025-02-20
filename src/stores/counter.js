import { ref ,onMounted} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  const countries = ref([]);
  const isLoading=ref(true)

  onMounted(async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      countries.value = response.data;
      isLoading.value=false
    } catch (error) {
      console.error('Error fetching countries:', error);
      isLoading.value=false
    }
  });
  

  return { countries ,isLoading}
})
