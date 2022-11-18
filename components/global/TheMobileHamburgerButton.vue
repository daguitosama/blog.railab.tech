<template>
    <button
        :aria-controls="controlsId"
        :aria-expanded="isOpen"
        @click="handleClick"
        class="w-[44px] h-[44px] rounded-lg flex items-center justify-center focus:bg-slate-100 focus:ring-2 focus:ring-black focus:outline-none"
    >
        <!-- label -->
        <span class="sr-only" v-if="isOpen"> {{ label.when_open }} </span>
        <span class="sr-only" v-else> {{ label.when_closed }} </span>

        <!-- bars -->
        <div
            aria-hidden="true"
            class="relative mx-auto w-[24px] h-[24px] flex flex-col items-center justify-center"
        >
            <div
                class="w-[16px] h-[2px] rounded-lg bg-black/80 absolute transition-transform duration-300"
                :class="{
                    'rotate-45  translate-y-[0px]': isOpen,
                    '-translate-y-[3px]': !isOpen,
                }"
            ></div>

            <div
                v-if="true"
                class="w-[16px] h-[2px] rounded-lg bg-black/80 absolute transition-transform duration-300"
                :class="{
                    '-rotate-45 translate-y-[0px]': isOpen,
                    'translate-y-[3px]': !isOpen,
                }"
            ></div>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
        label: {
            type: Object,
            default: () => ({
                when_open: 'Close Main navigation menu',
                when_closed: 'Open main navigation menu',
            }),
        },
        controlsId: {
            type: String,
            default: 'mobile-nav-menu',
        },
    },
    methods: {
        handleClick() {
            this.$emit('menu-toogle');
        },
    },
};
</script>
