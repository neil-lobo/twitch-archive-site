<template>
    <div id="content">
        <div class="cards" v-if="loadingVods">
            <h1 style="color:white;font-weight:300">Loading...</h1>
        </div>
        <div class="cards" v-else>
            <VodCard 
                v-for="(vod, index) in vods"
                :key="index"
                :date="vod.published_at"
                :id="vod.stream_id"
                :thumbnail="vod.thumbnail_url"
                :hiddenURL="vod.hidden_url"
            />
        </div>
    </div>
</template>

<script>
import VodCard from "@/components/VodCard.vue"

export default {
    name: "ChannelVods",
    components: {
        VodCard
    },
    methods: {
        loadVods: async function() {
            this.loadingVods = true
            const res = await fetch(`http://192.168.2.76:3000/vods/${this.$route.params.id}?sort=new`)
            const json = await res.json();
            // console.log(json)
            this.vods = json
            this.loadingVods = false
        }
    },
    mounted() {
        // console.log(this.$route.params.id)
        this.loadVods()
    },
    data() {
        return {
            vods: [],
            loadingVods: false
        }
    }
}
</script>

<style lang="scss" scoped>
.cards {
    margin: 20px auto 0 auto;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
</style>