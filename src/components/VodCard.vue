<template>
    <a :href="dvrURL(hiddenURL)" target="_blank">
        <v-card
            id="card"
            color="#8B90BB"
        >
            <v-img
                class="thumbnail"
                contain
                :src="fillResolution(thumbnail)"
            />
            <div id="id">{{id}}</div>
            <div id="date">{{`${formatDate(date)}`}}</div>
        </v-card>
    </a>
</template>

<script>
export default {
    name: "VodCard",
    props: {
        date: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        hiddenURL: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate: function(date) {
            date = new Date(date)
            return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        },
        fillResolution: function(url) {
            return url.replace("%{width}","1280").replace("%{height}", "720")
        },
        dvrURL: function({subdomain, path}) {
            return `https://${subdomain}.cloudfront.net/${path}/chunked/index-dvr.m3u8`
        }
    },
    mounted() {
        this.checkStatus(this.hiddenURL)
    }
}
</script>

<style lang="scss" scoped>
* {
    text-decoration: none;
}

#card {
    text-decoration: none;
    width: 200px;
    padding: 20px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-weight: 300;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transition: transform 0.4s;
        transform: translateY(-6px);
    }

    .thumbnail {
        margin-bottom: 10px;
    }
}

#id {
    font-size: 130%;
}

#date {
    font-size: 70%;
    color: #F1D543
}
</style>