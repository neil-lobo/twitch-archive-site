<template>
    <div id="app">
        <Navbar />
        <keep-alive>
            <router-view id="router-view" />
        </keep-alive>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    name: "App",
    components: {
        Navbar
    }
}
</script>


<style lang="scss">
// Global styles
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
html {
    overflow-y: auto;
    font-family: 'Roboto', sans-serif;
}

body {
    background: #2D325F;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #222222
}

::-webkit-scrollbar-thumb {
    background: #eeeeee;
    border-radius: 100px;

    &:hover {
        background: #bbbbbb
    }
}
</style>

<style lang="scss" scoped>
#router-view {
    padding: 20px;
}
</style>
