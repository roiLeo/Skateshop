<template>
  <div>
    <UCarousel
      ref="carouselRef"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden h-[calc(100vh-3.5rem)]"
    >
      <template #default="{ item }">
        <img :src="item" class="w-full" draggable="false">
      </template>
    </UCarousel>
    <div class="absolute font-bold bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <NuxtLink to="/#Home">
        SCROLL
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542727934-07691d6ebf0e?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1577949720124-008917690fc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1476344988293-1d5501af75a6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1650668015983-46edf6225b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 4200)
})
</script>
