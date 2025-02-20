<template>
    <nav class="bg-white shadow-md mb-8 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo and Title -->
          <div class="flex items-center space-x-3">
            <i class="pi pi-globe text-2xl text-blue-600 dark:text-white"></i>
            <h1 class="text-xl font-bold font-sans dark:text-white">Countries of the World</h1>
          </div>
  
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-6">
            <router-link to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <i class="pi pi-home"> </i> Home </router-link>
     
          </div>
  
        
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import 'primeicons/primeicons.css';
  </script>
  