<template>
    <div id="content">
        <v-btn class="button" color="#F1D543" height="45px">
            <span class="text">ADD STREAMER</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.75 0.75H3.25C1.8625 0.75 0.75 1.875 0.75 3.25V20.75C0.75 22.125 1.8625 23.25 3.25 23.25H20.75C22.125 23.25 23.25 22.125 23.25 20.75V3.25C23.25 1.875 22.125 0.75 20.75 0.75ZM18.25 13.25H13.25V18.25H10.75V13.25H5.75V10.75H10.75V5.75H13.25V10.75H18.25V13.25Z" fill="#1A1D38"/>
            </svg>
        </v-btn>

        <div class="cards" v-if="streamers">
            <ChannelCard
                v-for="(username, id) in streamers" :key="id"
                vod
                :id="id"
                :username="username"
            />
        </div>
    </div>
</template>

<script>
import ChannelCard from "@/components/ChannelCard.vue"

export default {
    name: "Vods",
    components: {
        ChannelCard
    },
    methods: {
        loadStreamers: async function() {
            const res = await fetch("http://localhost:3000/streamers")
            const json = await res.json();
            console.log(json)
            this.streamers = json
        }
    },
    mounted() {
        this.loadStreamers()
    },
    data() {
        return {
            loadingStreamers: false,
            streamers: null
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    .text {
        margin-right: 10px;
    }
}

.cards {
    margin: 20px auto 0 auto;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
</style>