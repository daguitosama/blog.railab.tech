<script setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { onKeyStroke } from '@vueuse/core';

// props
const props = defineProps({
    links: {
        type: Array,
        default: () => [{ text: 'Foo', route: '/foo' }],
    },
    externalLink: {
        text: 'Go to Railab',
        url: 'https://railab.tech',
    },
});

// focus trap
const naviation_menu = ref();
const { hasFocus, activate, deactivate } = useFocusTrap(naviation_menu, {
    // immediate: true,
});
//

const isMenuOpen = ref(false);
const controlsId = 'mobile-navigation-menu';
const { showOverflow, hideOverflow } = useOverflow();

// state toogle
function toogleMenuState() {
    if (!isMenuOpen.value) {
        openSecuence();
    } else {
        closeSecuence();
    }
}

function openSecuence() {
    // hide boddy overflow to
    // tell browser to use it on
    // this menu layer
    hideOverflow();
    isMenuOpen.value = true;
    // active focus trap
    activate();
}

function closeSecuence() {
    // show the body overflow again
    showOverflow();
    isMenuOpen.value = false;
    // deactivate focus trap
    deactivate();
}
// esc key handling
onKeyStroke('Escape', () => {
    if (isMenuOpen.value) {
        closeSecuence();
    }
});

// closing menu on route change
const router = useRouter();
router.beforeEach(() => closeSecuence());
</script>

<template>
    <nav ref="naviation_menu">
        <!-- nav bar -->
        <div
            class="px-[30px] py-[16px] flex items-center justify-between relative z-50 bg-white"
            :class="{ 'fixed top-0 left-0 w-full': !isMenuOpen || isMenuOpen }"
        >
            <TheLogo />
            <TheNavigationMobileHamburgerButton
                :isOpen="isMenuOpen"
                :controlsId="controlsId"
                @menu-toogle="toogleMenuState"
            />
        </div>
        <!-- navigation menu links -->
        <!-- move away of viewport and disable tab until gets open -->
        <div>
            <TheNavigationMobileMenu
                :isOpen="isMenuOpen"
                :links="links"
                :externalLink="externalLink"
                :controlsId="controlsId"
            />
        </div>
    </nav>
</template>
