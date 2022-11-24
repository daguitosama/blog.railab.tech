<script setup>
import WorldIcon from '~/components/icons/WorldIcon.vue';
import XIcon from '~/components/icons/XIcon.vue';
import Modal from '~/components/utils/Modal.vue';
import { onKeyStroke } from '@vueuse/core';

// props
const props = defineProps({
    onClick: {
        type: Function,
    },
    showBorders: {
        type: Boolean,
        default: true,
    },
    iconClasses: {
        type: String,
    },
});

// btn
const isOpen = ref(false); // shared
const { locale, localeProperties, locales } = useI18n();
const availableLocales = computed(() =>
    locales.value.filter((l) => l.code != locale.value)
);
const labels = {
    en: 'Open the language selector',
    es: 'Abrir el selector de lenguaje',
};
const label = computed(() => labels[locale.value]);

//

// menu
function closeModal() {
    isOpen.value = false;
}
function openModal() {
    isOpen.value = true;
}

function onBTNClick() {
    props.onClick ? props.onClick() : '';
    openModal();
}

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

// key strokes
onKeyStroke('Escape', (e) => {
    if (isOpen.value) {
        closeModal();
    }
});
</script>

<template>
    <!-- btn to open the menu -->
    <button
        @click="onBTNClick()"
        :aria-label="label"
        aria-controls="lang-menu-selector"
        class="h-[40px] w-[40px] rounded-full flex items-center justify-center text-sm focus-visible:outline focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-dark-base focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-2 hover:bg-light-elevation dark:hover:bg-zinc-900 focus:bg-light-elevation dark:focus:bg-zinc-900 transition-all duration-300"
        :class="{
            'border-2 border-slate-700 dark:border-white  ': showBorders,
        }"
    >
        <WorldIcon
            class="text-type-on-light-base dark:text-type-on-dark-base text-opacity-90"
            :class="iconClasses"
            aria-hidden="true"
        />
    </button>

    <!-- menu -->
    <Modal :show="isOpen" @close="closeModal">
        <div
            id="lang-menu-selector"
            class="relative w-full max-w-xl mx-auto p-[30px] overflow-hidden rounded-2xl bg-surface-light-base dark:bg-surface-dark-base shadow-xl transition-all duration-300"
        >
            <!-- close btn (x) -->
            <button
                type="button"
                class="absolute right-0 top-0 rounded-full p-[15px] -translate-x-[10px] translate-y-[10px] font-medium hover:bg-light-elevation dark:hover:bg-surface-dark-elevation focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-surface-light-base transition-all duration-300"
                @click="closeModal"
            >
                <XIcon
                    aria-hidden="true"
                    class="text-type-on-light-base dark:text-white"
                />

                <span class="sr-only">
                    {{ closeLabel }}
                </span>
            </button>

            <div class="mt-[18px]">
                <h3 class="text-2xl md:text-3xl font-medium">
                    {{ title }}
                </h3>
            </div>
            <div class="mt-[40px]">
                <ul class="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <li v-for="locale in availableLocales" :key="locale.code">
                        <NuxtLink
                            @click.native="closeModal"
                            :to="switchLocalePath(locale.code)"
                            class="w-full block border-slate-700 dark:border-zinc-600 border rounded-xl p-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white hover:bg-surface-light-elevation dark:hover:bg-surface-dark-elevation transition-all duration-300"
                            >{{ locale.name }}</NuxtLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </Modal>
</template>
