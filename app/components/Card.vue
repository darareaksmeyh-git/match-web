<template>
<div class="container mx-auto p-4">
     <div
      class="flex justify-between items-center cursor-pointer mb-4"
      @click="showAll = !showAll"
    >
      <h2 class="text-2xl font-bold">Featured Products</h2>
      <span
        class="text-3xl transform transition-transform duration-300"
        :class="{ 'rotate-90': showAll }"
      >
        &gt;
      </span>
    </div>
    <Carousel
    v-if="!showAll"
      :itemsToShow="4"
      :snapAlign="'start'"
      :wrapAround="false"
      :transition="500"
      :gap="16"
      :breakpoints="breakpoints"
      class="relative"
    >
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#">
        <img class="aspect-[4/3] object-cover rounded-t-[20px]" src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" alt="product image" />

                </a>
                <div>
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-4 rounded-[20px] flex items-center justify-between h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22"><g fill="none"><path fill="currentColor" fill-rule="evenodd" d="M14.375 3.982a6.086 6.086 0 0 0-8.424 4.933l-.252 2.265l-.006.056a7.5 7.5 0 0 1-1.006 2.98l-.03.049l-.577.963l-.014.024c-.25.417-.458.763-.593 1.049c-.136.289-.24.602-.188.933a1.5 1.5 0 0 0 .518.916c.258.216.58.286.897.318c.315.032.718.032 1.205.032h12.19c.487 0 .89 0 1.205-.032c.317-.032.64-.102.897-.318a1.5 1.5 0 0 0 .518-.916c.053-.332-.052-.644-.188-.933c-.135-.286-.342-.632-.593-1.05l-.014-.023l-.578-.963l-.029-.048a7.5 7.5 0 0 1-1.006-2.98l-.006-.057l-.042-.382q-.471.157-.985.193l.033.3l.007.06a8.5 8.5 0 0 0 1.14 3.377l.03.052l.579.963c.268.446.448.749.56.984c.111.238.11.323.105.35a.5.5 0 0 1-.173.306c-.022.018-.094.064-.355.09c-.26.026-.611.027-1.132.027H5.932c-.52 0-.873 0-1.131-.027c-.262-.026-.334-.072-.356-.09a.5.5 0 0 1-.173-.305c-.004-.028-.006-.113.106-.35c.11-.236.292-.539.56-.985l.577-.963l.031-.052a8.5 8.5 0 0 0 1.14-3.378l.007-.06l.252-2.265A5.086 5.086 0 0 1 13.67 4.78q.3-.447.704-.8m1.814 1.19a2 2 0 0 0-.79.63a5.07 5.07 0 0 1 1.653 3.197c.355-.009.687-.11.972-.28A6.07 6.07 0 0 0 16.19 5.17" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" d="M9.102 18.406c.171.744.548 1.402 1.072 1.87c.524.47 1.166.724 1.826.724s1.302-.254 1.826-.723c.524-.47.9-1.127 1.072-1.871" stroke-width="1"/><circle cx="17" cy="7" r="2" fill="currentColor"/></g></svg>
            Notify
            </a>
        </div>
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#">
        <img class="aspect-[4/3] object-cover rounded-t-[20px]" src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" alt="product image" />

                </a>
                <div>
                    <div class="flex-1 flex items-end">
<div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M10 21.25h4"/><path stroke-linejoin="round" d="M17.188 18.25H4.826a1 1 0 0 1-.848-1.53l1.089-1.74a3 3 0 0 0 .457-1.59V9.226c0-.788.14-1.543.398-2.242M7.62 4.458l.06-.055a6.477 6.477 0 0 1 10.798 4.825v4.161a3 3 0 0 0 .457 1.592l1.088 1.74q.068.106.104.219"/><path stroke-linejoin="round" d="m20.719 21.782l-3.531-3.531L5.922 6.985L2.218 3.282"/></g></svg>Mute
            </a>
        </div>
                    </div>
        
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#" class="block relative ">
                     <!-- Image wrapper relative -->
    <div class="relative">
      <img class="aspect-[4/3] object-cover rounded-t-[20px]" 
           src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" 
           alt="product image" />

        <!-- Circular Hot badge inside image wrapper -->
        <div class="absolute -top-4 -right-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <span class="text-white font-bold">Hot</span>
        </div>
        </div>
                </a>
                <div>
                    <div class="flex-1 flex flex-items-end">
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">Live</a>
        </div>
        </div>
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#" class="block relative ">
                     <!-- Image wrapper relative -->
    <div class="relative">
      <img class="aspect-[4/3] object-cover rounded-t-[20px]" 
           src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" 
           alt="product image" />

        <!-- Circular Hot badge inside image wrapper -->
        <div class="absolute -top-4 -right-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <span class="text-white font-bold">Hot</span>
        </div>
        </div>
                </a>
                <div>
                    <div class="flex-1 flex flex-items-end">
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">Live</a>
        </div>
        </div>
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#" class="block relative ">
                     <!-- Image wrapper relative -->
    <div class="relative">
      <img class="aspect-[4/3] object-cover rounded-t-[20px]" 
           src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" 
           alt="product image" />

        <!-- Circular Hot badge inside image wrapper -->
        <div class="absolute -top-4 -right-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <span class="text-white font-bold">Hot</span>
        </div>
        </div>
                </a>
                <div>
                    <div class="flex-1 flex flex-items-end">
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">Live</a>
        </div>
        </div>
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#" class="block relative ">
                     <!-- Image wrapper relative -->
    <div class="relative">
      <img class="aspect-[4/3] object-cover rounded-t-[20px]" 
           src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" 
           alt="product image" />

        <!-- Circular Hot badge inside image wrapper -->
        <div class="absolute -top-4 -right-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <span class="text-white font-bold">Hot</span>
        </div>
        </div>
                </a>
                <div>
                    <div class="flex-1 flex flex-items-end">
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">Live</a>
        </div>
        </div>
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#" class="block relative ">
                     <!-- Image wrapper relative -->
    <div class="relative">
      <img class="aspect-[4/3] object-cover rounded-t-[20px]" 
           src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" 
           alt="product image" />

        <!-- Circular Hot badge inside image wrapper -->
        <div class="absolute -top-4 -right-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <span class="text-white font-bold">Hot</span>
        </div>
        </div>
                </a>
                <div>
                    <div class="flex-1 flex flex-items-end">
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">Live</a>
        </div>
        </div>
    </div>
            </div>
        </Slide>
        <Slide>
            <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
                <a href="#" class="block relative ">
                     <!-- Image wrapper relative -->
    <div class="relative">
      <img class="aspect-[4/3] object-cover rounded-t-[20px]" 
           src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frxoc4dyke029v8kskwta.png" 
           alt="product image" />

        <!-- Circular Hot badge inside image wrapper -->
        <div class="absolute -top-4 -right-2 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <span class="text-white font-bold">Hot</span>
        </div>
        </div>
                </a>
                <div>
                    <div class="flex-1 flex flex-items-end">
        <div class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-2 rounded-[20px] flex items-center justify-between w-full h-20">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center gap-2">Live</a>
        </div>
        </div>
    </div>
            </div>
        </Slide>
        <!-- Navigation arrows -->
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div v-if="showAll" class="grid grid-cols-12 gap-4 mt-4">
    <div
      v-for="item in items"
      :key="item.id"
      class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-6"
    >
      <div class="bg-white border-0 rounded-lg overflow-hidden flex flex-col h-full">
        <a href="#">
          <img
            class="aspect-[4/3] object-cover rounded-t-[20px]"
            :src="item.img"
            :alt="item.title"
          />
        </a>
        <div>
          <div
            class="-mt-10 border-2 border-black relative z-0 bg-blue-100 p-4 rounded-[20px] flex items-center justify-between h-20"
          >
            <span class=" font-bold text-gray-900">
              {{ item.teamA }} VS {{ item.teamB }}
            </span>
            <p> {{ item.title }}</p>
            <!-- Live Button -->
            <a
              v-if="item.live"
              href="#"
              class="block sm:hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Live
            </a>
            <!-- Notification / Mute Button -->
            <a
              v-else-if="item.button === 'noti'"
              href="#"
              class="block sm:hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Notify
            </a>
            <a
              v-else-if="item.button === 'mute'"
              href="#"
              class="block sm:hidden md:block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Muted
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { CardProps } from './types';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const showAll = ref(false);

const { data: items, error } = await useFetch<CardProps[]>('/api/routes')



const breakpoints = {
    300: { itemsToShow: 2 },
  640: { itemsToShow: 2 },
  768: { itemsToShow: 3 },
  1024: { itemsToShow: 4 },
}


</script>
<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}

</style>