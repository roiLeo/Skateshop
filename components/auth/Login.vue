<template>
  <div class="space-y-4">
    <div class="flex gap-4">
      <UButton
        v-if="config.public.googleAuth"
        to="/auth/google"
        label="Sign-in with Google"
        icon="i-simple-icons-google"
        color="white"
        size="lg"
        external
        block
      />
      <UButton
        v-if="config.public.githubAuth"
        to="/auth/github"
        label="Sign-in with GitHub"
        icon="i-simple-icons-github"
        color="black"
        size="lg"
        external
        block
      />
    </div>

    <!-- <UDivider label="OR" /> -->

    <!-- <UForm ref="form" :state="state" class="space-y-4">
      <UFormGroup label="Email" name="email" required>
        <UInput
          v-model="state.email"
          placeholder="you@example.com"
          icon="i-heroicons-envelope"
          trailing
          type="email"
          autofocus
        />
      </UFormGroup>

      <UFormGroup label="Password" name="password" required>
        <template #hint>
          <NuxtLink class="text-sm hover:underline" to="/auth/forgot">Forgot your password?</NuxtLink>
        </template>

        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UTooltip text="for 1 month" :popper="{ placement: 'right' }">
        <UCheckbox v-model="state.remember" label="Remember me" />
      </UTooltip>

      <div class="flex items-center justify-end space-x-4">
        <UButton type="submit" label="Sign in" block />
      </div>
    </UForm> -->

    <!-- <div class="text-sm">
      Don't have an account yet?
      <NuxtLink class="text-sm" to="/auth/register">Sign up now</NuxtLink>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
// const router = useRouter()
// const auth = useAuthStore()
// const form = ref()

const state = reactive({
  email: "",
  password: "",
  remember: false,
})

// const { refresh: onSubmit, status: loginStatus } = useFetch<any>("login", {
//   method: "POST",
//   body: state,
//   immediate: false,
//   watch: false,
//   async onResponse({ response }) {
//     if (response?.status === 422) {
//       form.value.setErrors(response._data?.errors)
//     } else if (response._data?.ok) {
//       auth.token = response._data.token

//       await auth.fetchUser()
//       await router.push("/")
//     }
//   }
// })
</script>
