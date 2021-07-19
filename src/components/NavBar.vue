<template>
    <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>做题记录</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon href="https://github.com/renbaoshuo/OI-record" target="_blank">
            <v-icon>mdi-github</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    methods: {
        toggleDrawer() {
            this.$store.commit('toggleDrawer');
        },
    },
};
</script>

<style></style>
