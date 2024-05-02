<template>
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800">
    <UContainer class="grid items-center gap-8 pb-8 pt-6 md:py-8">
      <section class="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <section>
          <a class="flex w-fit items-center space-x-2" href="/">
            <span class="font-bold">Yet Another Skateshop</span><span class="sr-only">Home</span>
          </a>
        </section>
        <section class="xxs:grid-cols-2 grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3">
          <div class="space-y-3">
            <h4 class="text-base font-medium">Credits</h4>
            <ul class="space-y-2.5">
              <li>
                <a target="_blank" rel="noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="https://www.netlify.com/">Netlify<span class="sr-only">Netlify</span></a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="https://ui.nuxt.com/">Nuxt UI<span class="sr-only">Nuxt UI</span></a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="https://www.tonyhawk.com/">Tony Hawk<span class="sr-only">Tony Hawk</span></a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h4 class="text-base font-medium">Help</h4>
            <ul class="space-y-2.5">
              <li>
                <a class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="/about">About<span class="sr-only">About</span></a>
              </li>
              <li>
                <a class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="/contact">Contact<span class="sr-only">Contact</span></a>
              </li>
              <li>
                <a class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="/terms">Terms<span class="sr-only">Terms</span></a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h4 class="text-base font-medium">Social</h4>
            <ul class="space-y-2.5">
              <li>
                <a target="_blank" rel="noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="https://github.com/roiLeo">GitHub<span class="sr-only">GitHub</span></a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm" href="https://discord.com/users/roiLeo">Discord<span class="sr-only">Discord</span></a>
              </li>
            </ul>
          </div>
        </section>
        <section class="space-y-3">
          <h4 class="text-base font-medium">Subscribe to our newsletter</h4>
          <form class="grid w-full" autocomplete="off">
            <div class="relative space-y-0">
              <label class="sr-only text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for=":rf:-form-item">Email</label><input id=":rf:-form-item" class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 pr-12 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder="skate@gmail.com" aria-describedby=":rf:-form-item-description" aria-invalid="false" value="" name="email" />
              <button class="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 absolute right-[3.5px] top-[4px] z-20 inline-flex size-7 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium shadow focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-3" aria-hidden="true"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg><span class="sr-only">Join newsletter</span>
              </button>
            </div>
          </form>
        </section>
      </section>
      <section class="flex items-center space-between">
        <span class="text-sm text-gray-500"> © {{ new Date().getFullYear() }} roiLeo.</span>
        <UButton class="ml-auto" color="gray" size="md" icon="i-simple-icons-github" to="https://github.com/roiLeo/Nuxtplate" target="_blank" />
      </section>
    </UContainer>
  </footer>
</template>
