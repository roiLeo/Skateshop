<template>
  <header class="bg-background/75 border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex h-14 items-center justify-between">
      <NuxtLink to="/">Skateshop</NuxtLink>
      <div class="flex gap-1">
        <ColorPicker />
        <ColorModeButton />
        <UButton color="gray" variant="ghost" icon="i-heroicons-shopping-bag" />
        <UButton v-if="loggedIn" color="gray" icon="i-ph-power" @click="clear" />
        <UButton v-else color="black" size="md" to="/login" label="My Account" />
      </div>
    </UContainer>
  </header>
</template>


<script setup lang="ts">
const { loggedIn, clear } = useUserSession()
</script>
