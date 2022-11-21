<script setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { wait } from '~/utils/wait';
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

const emits = defineEmits(['close']);
const focus_trap_container = ref();
const { activate, deactivate } = useFocusTrap(focus_trap_container);

watch(
    props,
    // this callback it's runing before component updates, osea, there is no focus_trap_container avaible yet
    // that's what wee need wait this component has been updated
    // for some extrange reason the { flush: 'post'} watch config does not do the job
    async (newProps, oldProps) => {
        if (newProps.show) {
            await wait(0.01);
            activate();
        } else {
            await wait(0.01);
            deactivate();
        }
    }
);
</script>

<template>
    <Teleport to="body">
        <Transition>
            <div
                v-show="show"
                ref="focus_trap_container"
                role="dialog"
                class="px-6 fixed inset-0 w-full flex items-center justify-center z-20"
            >
                <!-- overlay -->
                <Transition
                    enter-active-class="duration-300 ease-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="duration-200 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div
                        class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md z-0"
                        v-show="show"
                    ></div>
                </Transition>
                <Transition
                    enter-active-class="duration-300 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-200 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                >
                    <div v-show="show" class="w-full">
                        <slot>
                            <div class="bg-white p-10 relative z-20">
                                <button @click="$emit('close')">close</button>
                            </div>
                        </slot>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
