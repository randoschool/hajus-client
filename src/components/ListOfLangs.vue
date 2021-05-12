<template>
  <div class="grid grid-cols-auto-fill gap-3 p-2">
    <div
      v-for="lang in langs"
      :key="lang.id"
      class="flex flex-col items-center justify-items-center p-2 rounded shadow hover:shadow-xl transition-all duration-300 w-64"
    >
      <div>{{ lang.inventor }}</div>
      <div class="font-bold text-indigo-600">{{ lang.name }}</div>
      <div class="text-2xl font-bold">{{ lang.year }}</div>
      <img
        :src="lang.img_link"
        class="h-48 object-contain w-full filter drop-shadow-lg"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const langs = ref(0);

const getLangs = async () => {
  const res = await fetch("http://localhost/api/content");
  langs.value = await res.json();
};

getLangs();
</script>
