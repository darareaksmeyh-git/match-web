<template>
  <nav class="bg-white border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
      <div class="grid grid-cols-12 w-full justify-between">
        <!-- Logo 2/2 4/12 -->
        <div
          class="lg:col-span-2 md:col-span-6 sm:col-span-8 col-span-8 row-span-2 flex items-center"
        >
          <Logo />
        </div>

        <!-- Small Screen from LG -->
        <div
          class="md:col-span-6 sm:col-span-4 lg:col-span-0 col-span-4 flex items-center justify-end lg:hidden"
        >
          <!-- Language  -->
          <LangBtn />
          <!-- Dropdown -->

          <!-- Burger Menu -->
        </div>
        <!-- Top Menu 1/2 8/12 -->
        <div
          class="bg-gold-gradient-horizontal py-4 px-2 col-span-10 lg:col-span-10 flex items-center justify-center w-full hidden lg:flex lg:w-auto lg:order-1 space-x-4 text-sm text-gray-700"
          id="navbar-top"
        >
          <TopMenu />
        </div>
        <!-- Main Menu 1/2 8/12 -->
        <div
          class="bg-black py-4 px-2 col-span-10 lg:col-span-10 flex items-center justify-center w-full hidden lg:flex lg:w-auto lg:order-2 space-x-4 text-sm text-gray-700"
          id="navbar-main"
        >
          <MainMenu />
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted } from "vue";
import Logo from "./Logo.vue";

onMounted(async () => {
  const flowbite = await import("flowbite");
  flowbite.initDropdowns(); // dropdowns
  flowbite.initCollapses(); // collapsible menu
});
</script>
