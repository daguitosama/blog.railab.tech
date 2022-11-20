<script setup>
import XIcon from '~/components/icons/XIcon.vue';

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue';

const isOpen = useLangSelectorState();

function closeModal() {
    isOpen.value = false;
}

const { locale, locales } = useI18n();
const availableLocales = computed(() =>
    locales.value.filter((l) => l.code != locale.value)
);

// menu content
const titles = {
    en: 'Select your language',
    es: 'Seleccione su lenguaje',
};
const title = computed(() => titles[locale.value]);
const closeLabels = {
    en: 'Close language selector',
    es: 'Cerrar selector de lenguaje',
};
const closeLabel = computed(() => closeLabels[locale.value]);

//
// closing menu on route change
// const router = useRouter();
// router.beforeEach(() => {
//     console.log('route change');
//     if (isOpen.value) {
//         closeModal();
//     }
// });
</script>

<template>
    <!-- menu -->
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md"
                />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                            <div class="flex justify-between align-top">
                                <DialogTitle
                                    as="h3"
                                    class="text-2xl font-medium leading-6 text-gray-900"
                                >
                                    {{ title }}
                                </DialogTitle>

                                <button
                                    type="button"
                                    class="rounded-full p-[15px] -translate-y-[15px] translate-x-[15px] font-medium hover:bg-light-elevation focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                    @click="closeModal"
                                >
                                    <XIcon aria-hidden="true" />

                                    <span class="sr-only">
                                        {{ closeLabel }}
                                    </span>
                                </button>
                            </div>

                            <div class="mt-[40px]">
                                <ul class="flex flex-col gap-[12px]">
                                    <li
                                        v-for="locale in availableLocales"
                                        :key="locale.code"
                                        @click="() => console.log('click')"
                                    >
                                        <NuxtLink
                                            :to="switchLocalePath(locale.code)"
                                            class="w-full block border-black/40 border rounded-xl p-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                            >{{ locale.name }} foo</NuxtLink
                                        >
                                    </li>
                                </ul>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
