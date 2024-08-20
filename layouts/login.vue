<template>
  <div class="flex min-h-screen flex-col">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <main aria-label="Main" class="px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-4">
        <div class="bg-background/75 border-b border-gray-200 dark:border-gray-800">
          <div class="flex h-14 items-center justify-between">
            <NuxtLink to="/">Skateshop</NuxtLink>
            <div class="flex gap-1">
              <ColorPicker />
              <ColorModeButton />
            </div>
          </div>
        </div>
        <NuxtPage />
      </main>
      <section class="relative flex h-32 items-end bg-gradient-to-b from-blue-400 to-blue-200 lg:col-span-6 lg:h-full xl:col-span-8">
        <!-- <img alt="Night" src="https://images.unsplash.com/photo-1567606940890-717aec672c0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute inset-0 h-full w-full object-cover opacity-80" /> -->
        <img alt="Night" src="https://images.unsplash.com/photo-1688318375271-b25e13f196ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute inset-0 h-full w-full object-cover opacity-80" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900'
  }
})
</script>
