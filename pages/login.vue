<template>
  <div>
    <UCard class="w-full max-w-md mx-auto my-20">
      <h1 class="text-3xl font-black mb-6 leading-tight tracking-tight">Log In</h1>
      <AuthLogin />
    </UCard>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'login'
  // middleware: 'guest'
})
</script>

<style>

</style>
