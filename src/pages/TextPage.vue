
<template>
  {{ route.params.slug }}
</template>

<script setup>
import { useRoute } from 'vue-router';

  const route = useRoute();
</script>