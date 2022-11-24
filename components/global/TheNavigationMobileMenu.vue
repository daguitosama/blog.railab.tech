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
const emit = defineEmits(['close']);
function closeMenu() {
    emit('close');
}
</script>

<template>
    <div>
        <Transition
            enterFromClass="-translate-y-[100%] "
            enterActiveClass="transition-all duration-500"
            enterToClass="translate-y-[0%] "
            leave-from-class="translate-y-[0%] "
            leaveActiveClass="transition-all duration-500"
            leaveToClass="-translate-y-[100%] "
        >
            <div
                class="fixed inset-0 w-full h-full bg-white dark:bg-surface-dark-base py-[80px] overflow-y-auto transition-all duration-300"
                v-show="isOpen"
            >
                <ul :id="controlsId" class="pt-[40px] grid gap-[10px]">
                    <template v-for="(link, index) in links" :key="index">
                        <!-- isCurrent: case when route ends with '/' or not and is just '/' -->
                        <NavigationMobileMenuLink
                            class="flex justify-center"
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

                    <li
                        class="mt-[15px] px-[30px] flex items-start justify-center"
                    >
                        <Transition
                            enter-from-class="opacity-0 scale-0"
                            enter-active-class="transition-all duration-500 delay-200"
                            enter-to-class="opacity-100 scale-100"
                        >
                            <div v-show="isOpen">
                                <TheLangSelector :onClick="closeMenu" />
                            </div>
                        </Transition>
                        <Transition
                            enter-from-class="opacity-0 scale-0"
                            enter-active-class="transition-all duration-500 delay-300"
                            enter-to-class="opacity-100 scale-100"
                        >
                            <div v-show="isOpen">
                                <TheColorSelector
                                    class="ml-4"
                                    :show-borders="true"
                                />
                            </div>
                        </Transition>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>
