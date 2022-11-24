<script setup>
import SunIcon from '~/components/icons/SunIcon.vue';
import MoonIcon from '~/components/icons/MoonIcon.vue';
import ComputerIcon from '~/components/icons/ComputerIcon.vue';
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

// color schemes
const colorMode = useColorMode();
console.log({ preference: colorMode.preference });
const availableSchemes = ['system', 'light', 'dark'];

function changeColorScheme() {
    const currentSchemeIdx = availableSchemes.indexOf(colorMode.preference);
    // rotate preference
    colorMode.preference =
        availableSchemes[
            // if is the last scheme go to first, rotate other wise
            currentSchemeIdx + 1 > availableSchemes.length - 1
                ? 0
                : currentSchemeIdx + 1
        ];
}

// i18n labels
const labels = {
    es: 'Cambiar el esquema de color.',
    en: 'Change color scheme .',
};
const color_scheme_keys = {
    en: {
        system: 'System',
        light: 'Light',
        dark: 'Dark',
    },
    en: {
        system: 'Sistema',
        light: 'Claro',
        dark: 'Obscuro',
    },
};

// fn
function onBTNClick() {
    props.onClick ? props.onClick() : '';
    changeColorScheme();
}
</script>

<template>
    <!-- :aria-label="label" -->
    <button
        @click="onBTNClick()"
        aria-controls="lang-menu-selector"
        class="h-[40px] w-[40px] rounded-full flex items-center justify-center text-sm focus-visible:outline focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-2 hover:bg-light-elevation focus:bg-light-elevation transition-all duration-200"
        :class="{
            'border-slate-700 border-2 ': showBorders,
        }"
    >
        <!-- do -->
        <div v-if="colorMode.preference == 'system'">
            <ComputerIcon
                class="text-type-on-light-base text-opacity-90"
                :class="iconClasses"
                aria-hidden="true"
            />
        </div>
        <div v-else-if="colorMode.preference == 'light'">
            <SunIcon
                class="text-type-on-light-base text-opacity-90"
                :class="iconClasses"
                aria-hidden="true"
            />
        </div>
        <div v-else-if="colorMode.preference == 'dark'">
            <MoonIcon
                class="text-type-on-light-base text-opacity-90"
                :class="iconClasses"
                aria-hidden="true"
            />
        </div>
    </button>
    <!-- <Teleport to="body">
        <pre
            class="bg-white p-[20px] rounded-2xl z-20"
        ><code>{{colorMode.preference}}</code></pre>
    </Teleport> -->
</template>
