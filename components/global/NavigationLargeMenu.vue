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
            class="relative flex items-center justify-center"
        >
            <NuxtLink
                :to="localePath(link.route)"
                class="px-[16px] py-[10px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-black rounded-lg text-type-on-light-base hover:text-primary-on-light-base hover:underline active:text-primary-on-light-base"
                :class="{
                    'underline text-primary-on-light-base ':
                        route.path.endsWith('/') && route.path.length > 1
                            ? route.path.substring(0, route.path.length - 1) ==
                              localePath(link.route)
                            : route.path == localePath(link.route),
                }"
            >
                {{ link.text }}
            </NuxtLink>
        </li>
        <li class="relative flex items-center justify-center">
            <a
                :href="externalLink.route"
                class="px-[16px] py-[10px] focus:oEutline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-black rounded-lg text-type-on-light-base hover:text-primary-on-light-base hover:underline active:text-primary-on-light-base cursor-pointer"
                :data-text="externalLink.text"
            >
                {{ externalLink.text }}
            </a>
        </li>
    </ul>
</template>
