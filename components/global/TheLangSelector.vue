<script setup>
import WorldIcon from '~/components/icons/WorldIcon.vue';
import XIcon from '~/components/icons/XIcon.vue';
import Modal from '~/components/utils/Modal.vue';
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
</script>

<template>
    <!-- btn to open the menu -->
    <button
        @click="onBTNClick()"
        :aria-label="label"
        aria-controls="lang-menu-selector"
        class="h-[40px] w-[40px] rounded-full flex items-center justify-center text-sm focus-visible:outline focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-2 hover:bg-light-elevation focus:bg-light-elevation transition-all duration-200"
        :class="{
            'border-slate-700 border-2 ': showBorders,
        }"
    >
        <WorldIcon
            class="text-type-on-light-base text-opacity-90"
            :class="iconClasses"
            aria-hidden="true"
        />
    </button>

    <!-- menu -->
    <Modal :show="isOpen" @close="closeModal">
        <div
            id="lang-menu-selector"
            class="w-full max-w-xl mx-auto transform overflow-hidden rounded-2xl bg-white p-[30px] shadow-xl transition-all"
        >
            <div class="flex flex-col items-start">
                <button
                    type="button"
                    class="rounded-full p-[15px] -translate-x-[15px] font-medium hover:bg-light-elevation focus:outline-none focus-visible:ring-2 focus-visible:ring-black transition-all duration-150"
                    @click="closeModal"
                >
                    <XIcon aria-hidden="true" />

                    <span class="sr-only">
                        {{ closeLabel }}
                    </span>
                </button>
                <h3 class="mt-5 text-3xl md:text-4xl font-medium">
                    {{ title }}
                </h3>
            </div>
            <div class="mt-[40px]">
                <ul class="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <li v-for="locale in availableLocales" :key="locale.code">
                        <NuxtLink
                            @click.native="closeModal"
                            :to="switchLocalePath(locale.code)"
                            class="w-full block border-black/40 border rounded-xl p-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black transition-all duration-150"
                            >{{ locale.name }}</NuxtLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </Modal>
</template>
