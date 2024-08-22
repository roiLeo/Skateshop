
<template>
	<div class="border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-lg max-w-auto">
		<div class="relative">
      <nuxt-link :to="`/products`">
				<img
          v-if="image"
          class="block object-cover h-auto rounded-md aspect-square"
          :src="image"
          alt="Halte la!"
          :width="300"
          :height="300"
          loading="lazy"
        />
        <div v-else class="bg-primary/10 overflow-hidden flex size-full items-center justify-center animate-none h-72">
          <UIcon name="i-heroicons-photo" class="w-9 h-9" />
        </div>
      </nuxt-link>
		</div>
		<div class="p-4 border-y border-gray-200 dark:border-gray-700">
      <nuxt-link :to="`/products`" class="max-w-full self-start font-semibold hover:underline">
        This is a name #123
      </nuxt-link>

			<p class="block py-2 font-normal leading-5 text-sm truncate text-neutral-400">
				{{ price }} €
			</p>
		</div>

    <div class="heading heading flex h-[3.8rem] items-center justify-between px-4 font-medium leading-none gap-2">
      <template v-if="price > 0">
        <div class="flex-grow">
          <UButton color="black" variant="solid" size="sm" block>Add to cart</UButton>
        </div>
        <UButton
          square
          color="white"
          size="sm"
          icon="i-heroicons-eye"
          v-if="price > 0"
        />
      </template>
      <small v-else class="text-neutral-500">
        Not for sale
      </small>
    </div>
	</div>
</template>

<script lang="ts" setup>
// const props = defineProps(['item'])
const image = ref()
const price = ref(420)
</script>
