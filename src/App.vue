<template>
    <v-app>
        <NavBar />
        <Navigation />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        Navigation,
        Footer,
    },
    data: () => ({ drawer: null }),
    mounted() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    },
};
</script>

<style>
.v-main__wrap {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    justify-content: space-between;
}
</style>