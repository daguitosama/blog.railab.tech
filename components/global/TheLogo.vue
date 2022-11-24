<script></script>

<template>
    <div>
        <NuxtLink
            :to="localePath('/')"
            class="flex items-baseline focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-offset-zinc-800 dark:focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-4 rounded-lg transition-all duration-300"
        >
            <span class="text-2xl">Railab</span>
            <span class="ml-[6px] font-extrabold text-sm">Blog</span>
        </NuxtLink>
    </div>
</template>
