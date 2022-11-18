<script setup>
const isMenuOpen = ref(false);
const controlsId = 'mobile-navigation-menu';
</script>

<template>
    <nav>
        <!-- nav bar -->
        <div class="px-[30px] py-[16px] flex items-center justify-between">
            <TheLogo />
            <TheMobileHamburgerButton
                :isOpen="isMenuOpen"
                :controlsId="controlsId"
                @menu-toogle="isMenuOpen = !isMenuOpen"
            />
        </div>
        <!-- navigation menu links -->
        <!-- move away of viewport and disable tab until gets open -->
        <div></div>
    </nav>
</template>
