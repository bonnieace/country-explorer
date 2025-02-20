import { ref ,onMounted,computed,watch} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  const countries = ref([]);
  const isLoading=ref(true)
  const searchTerm=ref('')
  const allcountries=ref([])

  
  onMounted(async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      allcountries.value = response.data;
      
      countries.value=allcountries.value
      console.log(countries.value)
      isLoading.value=false
    } catch (error) {
      console.error('Error fetching countries:', error);
      isLoading.value=false
    }
  });
   // Watch searchTerm and update countries dynamically
   watch(searchTerm, (newTerm) => {
    if (newTerm.trim() === '') {
      countries.value = allcountries.value; // Reset to all countries when empty
    } else {
      countries.value = allcountries.value.filter((country) =>
        country.name.common.toLowerCase().includes(newTerm.toLowerCase()),
      );
    }
  });

  function clearSearch() {
    searchTerm.value = '';

    countries.value = allcountries.value;  }
 
  
  

  return { countries ,isLoading,searchTerm,clearSearch}
})
