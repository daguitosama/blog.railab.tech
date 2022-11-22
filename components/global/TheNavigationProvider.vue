<script setup>
const { locale } = useI18n();

const navData = {
    links: [
        {
            text: 'Home',
            route: '/',
        },
        {
            text: { en: 'Posts', es: 'Artículos' },
            route: '/posts',
        },
        {
            text: { en: 'Topics', es: 'Temas' },
            route: '/topics',
        },
        // {
        //     text: { en: 'Authors', es: 'Autores' },
        //     route: '/authors',
        // },
    ],
    externalLink: {
        text: { en: 'Go to Railab', es: 'Ir a Railab' },
        url: 'https://railab.tech',
    },
};
const links = computed(() => mapLinks(locale.value));
const externalLink = computed(() => mapExtLink(locale.value));

function mapLinks(locale_key = 'es') {
    const links = navData.links.map((link) => ({
        route: link.route,
        text: link.text[locale_key] ? link.text[locale_key] : link.text,
    }));
    return links;
}

function mapExtLink(locale_key = 'es') {
    return {
        text: navData.externalLink.text[locale_key],
        route: navData.externalLink.route,
    };
}
</script>

<template>
    <TheNavigation :links="links" :externalLink="externalLink" />
</template>
