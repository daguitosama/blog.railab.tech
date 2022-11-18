<script setup>
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';

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

// todo focus first menu link
// prevent tab on menu links
function toogleMenuState() {
    if (!isMenuOpen.value) {
        // hide boddy overflow to
        // tell browser to use it on
        // this menu layer
        hideOverflow();
        isMenuOpen.value = true;
        // active focus trap
        activate();
    } else {
        // show the body overflow again
        showOverflow();
        isMenuOpen.value = false;
        // deactivate focus trap
        deactivate();
    }
}
</script>

<template>
    <nav ref="naviation_menu">
        <!-- nav bar -->
        <div
            class="px-[30px] py-[16px] flex items-center justify-between relative z-50 bg-white"
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
