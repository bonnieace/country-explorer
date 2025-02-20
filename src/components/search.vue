<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

</script>

<template>
            <div id="search-container" class="flex justify-center mb-6 ">
            
            
        
        
        <div class="w-full mb-6 relative">
            <input
                v-model="store.searchTerm"
                type="text"
                id="search"
                placeholder="Search for a country..."
                class="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                
            />
            <span class="absolute left-3 top-3 text-gray-400 dark:text-gray-300">🔍 </span>

            <span class="absolute right-3 top-3 text-gray-400 dark:text-gray-300" @click="store.clearSearch">✖ </span>
        </div>
            </div>
        
        
</template>