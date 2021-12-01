<template>
    <div id="app">
        <header>
            <topMenu/>
        </header>
        <main>
            <div class="container">
                <router-view/>
            </div>
        </main>
        <footer>
            <vue-footer/>
        </footer>
    </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>


<script>
    import topMenu from "./navigation/topMenu";
    import vueFooter from "./navigation/footer";

    export default {
        components: {
            topMenu,
            vueFooter
        },

    }
</script>
