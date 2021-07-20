<template>
    <div>
        <template>
            <div class="text-center">
                <v-pagination
                    v-model="page"
                    :length="pages_length"
                    :total-visible="12"
                    @input="onPageChange()"
                ></v-pagination>
            </div>
        </template>
        <div v-if="loading" class="text-center ma-5">
            <v-progress-circular indeterminate size="24"></v-progress-circular>&nbsp;&nbsp;加载中...
        </div>
        <div v-if="!loading">
            <v-simple-table class="my-5">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">
                                标题
                            </th>
                            <th class="text-center">
                                时间
                            </th>
                            <th class="text-center">
                                链接
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in commits" :key="item.name">
                            {{
                                void (item.commit_message = item.commit.message.split('\n'))
                            }}
                            <td>{{ item.commit_message[0] }}</td>
                            <td class="text-center">{{ item.commit.author.date | formatDate }}</td>
                            <td class="text-center">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on" :href="item.html_url" target="_blank">
                                            <v-icon>mdi-github</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>View on GitHub</span>
                                </v-tooltip>
                                <v-tooltip bottom v-if="item.commit_message[2]">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon
                                            v-bind="attrs"
                                            v-on="on"
                                            :href="
                                                item.commit_message[2].replace(
                                                    /^R([0-9]{1,8})(.*)?/g,
                                                    'https://www.luogu.com.cn/record/$1'
                                                )
                                            "
                                            target="_blank"
                                        >
                                            <v-icon>mdi-poll</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>View Record</span>
                                </v-tooltip>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
        <template>
            <div class="text-center">
                <v-pagination
                    v-model="page"
                    :length="pages_length"
                    :total-visible="12"
                    @input="onPageChange()"
                ></v-pagination>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        page: 1,
        pages_length: 1,
        commits: {
            //
        },
        total_commits: 0,
        onPageChange() {
            this.$router.push(`/page/${this.page}`);
        },
    }),
    watch: {
        $route() {
            this.mounted();
        },
    },
    mounted() {
        this.page = Number(this.$route.params.id);
        this.$ajax
            .get('https://github-api.rbs.workers.dev/repos/renbaoshuo/OI-codes/commits?per_page=1')
            .then((response) => {
                this.$ajax
                    .get(
                        `https://github-api.rbs.workers.dev/repos/renbaoshuo/OI-codes/compare/50bd54f...${response.data[0].sha}`
                    )
                    .then((response) => {
                        this.total_commits = response.data.total_commits + 1;
                        this.pages_length = Math.ceil(this.total_commits / 20);
                        this.loading = true;
                        this.$ajax
                            .get(
                                `https://github-api.rbs.workers.dev/repos/renbaoshuo/OI-codes/commits?page=${this.page}&per_page=20`
                            )
                            .then((response) => {
                                this.commits = response.data;
                                this.loading = false;
                            })
                            .catch((error) => {
                                console.log(error);
                                this.$router.push('/404');
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$router.push('/404');
                    });
            })
            .catch((error) => {
                console.log(error);
                this.$router.push('/404');
            });
    },
};
</script>

<style></style>
