<template>
    <v-app>
        <NavBar />
        <Navigation />
        <v-main>
            <v-container>
                <router-view :key="$route.fullPath" />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import Navigation from '@/components/Navigation';

export default {
    name: 'App',
    components: {
        NavBar,
        Navigation,
    },
    data: () => ({ drawer: null }),
    mounted() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    },
};
</script>
