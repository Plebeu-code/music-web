<template>
<div class="h-full w-full" >
  <HeaderComponent />
  <div class="flex flex-col" >
    <router-view></router-view>
  </div>
</div>
</template>
<script setup >
import HeaderComponent from "@/components/Header.vue";
</script> 