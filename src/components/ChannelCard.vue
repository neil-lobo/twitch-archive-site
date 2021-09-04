<template>
    <router-link :to="`/${vod ? 'vods' : 'chats'}/${id}`">
        <v-card
            id="card"
            color="#8B90BB"
        >
            <div id="username">{{username}}</div>
            <div id="id">{{id}}</div>
        </v-card>
    </router-link>
</template>

<script>
export default {
    name: "ChannelCard",
    props: {
        username: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        vod: Boolean,
        lastVod: String,
        numVods: [String, Number],
        chat: Boolean,
        lastChat: String
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
}

#username {
    font-size: 130%;
}

#id {
    font-size: 70%;
    color: #F1D543
}

</style>