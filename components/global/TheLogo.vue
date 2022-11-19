<script></script>

<template>
    <div>
        <NuxtLink
            :to="localePath('/')"
            class="flex items-baseline focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none focus-visible:ring-offset-4 rounded-lg"
        >
            <span class="text-2xl">Railab</span>
            <span class="ml-[12px] font-extrabold text-sm">Blog</span>
        </NuxtLink>
    </div>
</template>
