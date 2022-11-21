<script setup>
const show = ref(false);
</script>

<template>
    <div>
        <button @click="show = true">Open Modal</button>
        <pre>{{ show }}</pre>
    </div>

    <!-- 
     -->
    <Teleport to="body">
        <Transition
            enter-active-class="duration-300 ease-out transition-all"
            enter-from-class="opacity-0 scale-110"
            enter-to-class="opacity-100 "
            leave-active-class="duration-200 ease-in transition-all"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-110"
        >
            <div v-if="show">
                <div
                    class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md z-0"
                ></div>

                <div
                    class="fixed inset-0 w-full h-full flex justify-center items-center overflow-y-auto"
                >
                    <div class="bg-white p-[30px] rounded-lg max-w-md">
                        <h3>Hello from the modal!</h3>
                        <button @click="show = false">Close</button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
