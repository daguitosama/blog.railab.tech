<script setup>
const hsl = reactive({
    h: 100,
    s: 50,
    l: 70,
});

const css_hsl_value = computed(() => `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`);
const save_points = ref([]);

function onMouseMove(evt) {
    // console.log({
    //     coords: {
    //         x: evt.clientX,
    //         y: evt.clientY,
    //     },
    // });
    const width = window.innerWidth;

    hsl.h = (evt.clientX / width) * 360 || 0;
    hsl.s =
        evt.clientY / window.innerHeight
            ? (evt.clientY / window.innerHeight) * 100
            : 0;
    // hsl.l = (evt.clientX / width) * 100 || 0;
}

function savePoint(evt) {
    const point = {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
    };
    save_points.value.push(point);
}

const throtledOnMouseMove = throtledFn(onMouseMove);

onMounted(() => {
    document.addEventListener('mousemove', throtledOnMouseMove);
    document.addEventListener('click', savePoint);
});

function throtledFn(fn = () => {}, interval = 16) {
    var isActive = true;
    return function (params) {
        if (isActive) {
            fn(params);
            isActive = false;
            setTimeout(() => {
                isActive = true;
            }, interval);
        }
    };
}
</script>

<template>
    <div
        class="px-[15px] max-w-screen-xl mx-auto w-full min-h-screen"
        :style="`background-color: ${css_hsl_value};`"
    >
        <!-- <div class="w-[10mm] h-[10mm] bg-primary-on-light-base"></div> -->
        <p class="bg-white p-2 rounded-md">{{ css_hsl_value }}</p>

        <ul>
            <li
                v-for="(point, index) in save_points"
                :key="index"
                class="bg-white border rounded-lg p-2 flex items-center"
            >
                <div
                    class="w-4 h-4"
                    :style="`background-color: hsl(${point.h},${point.s}%,${point.l}%);`"
                ></div>
                <span class="ml-4 text-xs"
                    ><code>{{ point }}</code></span
                >
            </li>
        </ul>
    </div>
</template>
