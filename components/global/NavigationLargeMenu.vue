<script setup>
const props = defineProps({
    links: {
        type: Array,
        default: () => [
            {
                text: 'Foo',
                route: '/foo',
            },
        ],
    },
    externalLink: {
        type: Object,
        default: {
            text: '',
            route: '',
        },
    },
});
const route = useRoute();
</script>

<template>
    <ul class="text-sm flex items-center justify-center">
        <li
            v-for="(link, index) in links"
            :key="index"
            class="relative flex items-center justify-center px-[6px]"
        >
            <NuxtLink
                :to="localePath(link.route)"
                class="px-[10px] py-[6px] rounded-full focus:outline-none focus-visible:ring-2 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-800 dark:focus-visible:ring-white focus-visible:ring-black text-type-on-light-base dark:text-type-on-dark-base hover:text-primary-on-light-base hover:underline active:text-primary-on-light-base transition-all duration-300"
                :class="{
                    'bg-sky-100 dark:bg-sky-100/10 text-primary-on-light-base dark:text-blue-300':
                        route.path.endsWith('/') && route.path.length > 1
                            ? route.path.substring(0, route.path.length - 1) ==
                              localePath(link.route)
                            : route.path == localePath(link.route),
                }"
            >
                {{ link.text }}
            </NuxtLink>
        </li>
        <li class="relative flex items-center justify-center px-[6px]">
            <a
                :href="externalLink.route"
                class="px-[10px] py-[6px] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-offset-zinc-800 dark:focus-visible:ring-white text-type-on-light-base dark:text-[#E3E8EF] hover:text-primary-on-light-base hover:underline active:text-primary-on-light-base transition-all duration-300 cursor-pointer"
                :data-text="externalLink.text"
            >
                {{ externalLink.text }}
            </a>
        </li>
    </ul>
</template>
