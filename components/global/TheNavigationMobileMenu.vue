<script setup>
const route = useRoute();
const props = defineProps({
    links: {
        type: Array,
        default: () => [{ text: 'Foo', route: '/foo' }],
    },
    externalLink: {
        text: 'Go to Railab',
        url: 'https://railab.tech',
    },
    controlsId: {
        type: String,
        default: '',
    },
    isOpen: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div>
        <Transition
            enterFromClass="-translate-x-[100%]"
            enterActiveClass="transition-transform duration-300"
            enterToClass="translate-x-[0&]"
            leaveActiveClass="transition-transform duration-300"
            leaveToClass="-translate-x-[100%]"
        >
            <div
                class="fixed inset-0 w-full h-full bg-white py-[80px] overflow-y-auto"
                v-show="isOpen"
            >
                <ul :id="controlsId" class="pt-[40px] grid gap-[10px]">
                    <template v-for="link in links">
                        <!-- isCurrent: case when route ends with '/' or not and is just '/' -->
                        <NavigationMobileMenuLink
                            :link="link"
                            :isReachable="isOpen ? true : false"
                            :isCurrent="
                                route.path.endsWith('/') &&
                                route.path.length > 1
                                    ? route.path.substring(
                                          0,
                                          route.path.length - 1
                                      ) == localePath(link.route)
                                    : route.path == localePath(link.route)
                            "
                        />
                    </template>

                    <li class="px-[30px] pt-[15px] pb-[30px]">
                        <div class="h-[1px] border-t border-black/50"></div>
                    </li>
                    <li class="px-[16px]">
                        <TheLangSelector />
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>
