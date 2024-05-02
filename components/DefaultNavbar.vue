<template>
  <header class="bg-background/75 border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex h-14 items-center justify-between">
      <NuxtLink to="/">Skateshop</NuxtLink>
      <div class="flex gap-1">
        <ColorPicker />
        <ColorModeButton />
        <UButton color="gray" variant="ghost" size="md" icon="i-heroicons-shopping-bag" />
        <UButton color="black" size="md" to="/login" label="My Account" />
      </div>
    </UContainer>
  </header>
</template>
