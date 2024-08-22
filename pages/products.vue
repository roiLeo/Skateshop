<template>
  <section class="space-y-6 pt-14 md:pt-20 lg:pt-24">
    <div class="flex items-center justify-between gap-4">
      <div class="flex max-w-[61.25rem] flex-1 flex-col gap-0.5">
        <h2 class="text-2xl font-bold leading-[1.1] md:text-3xl">Featured products</h2>
        <p class="text-muted-foreground max-w-[46.875rem] text-balance text-sm leading-normal sm:text-base sm:leading-7">Explore products from around the world</p>
      </div>
      <UButton variant="outline" icon="i-heroicons-arrow-right" trailing>View all products</UButton>
    </div>

    <div class="sm:grid-cols-2 mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4 mt-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
