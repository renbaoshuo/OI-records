<template>
    <v-navigation-drawer v-model="showDrawer" app>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
                <v-list-item-title class="text-h5">{{ title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav>
            <v-list-item link v-for="item in list_item" :key="item.url" :to="item.url">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav>
            <v-list-item link v-for="item in list_item_2" :key="item.url" :href="item.url">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        title: '做题记录',
        subtitle: '',
        list_item: [
            {
                title: '首页',
                url: '/',
                icon: 'mdi-home',
            },
        ],
        list_item_2: [
            {
                title: '个人主页',
                url: 'https://baoshuo.ren',
                icon: 'mdi-account',
            },
            {
                title: '博客',
                url: 'https://blog.baoshuo.ren',
                icon: 'mdi-post',
            },
        ],
    }),
    computed: {
        showDrawer: {
            get() {
                return this.$store.getters.drawerState;
            },
            set(val) {
                this.$store.commit('setDrawer', val);
            },
        },
    },
};
</script>

<style></style>
