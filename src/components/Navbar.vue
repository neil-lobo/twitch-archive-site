<template>
    <v-app-bar
        app
        flat
        color="#1A1D38"
        class="nav-bar"
    >
    <div>
        <v-btn text class="nav-button" to="/vods" color=white active-class="active-nav">
            <span class="text">VODS</span>
        </v-btn>
        <v-btn text class="nav-button" to="/chats" color=white active-class="active-nav">
            <span class="text">CHATS</span>
        </v-btn>
    </div>
    </v-app-bar>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
.nav-button {
    margin: 0 15px 0 15px;

    .text {
        margin: 0 7px 0 7px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-weight: 300;
        color: white;
    }
}

.active-nav {
    background-color: rgba(255, 255, 255, 0.25);
}

.join-button {
    .text {
        color: white;
    }
}
</style>