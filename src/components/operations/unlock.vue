<script>
export default {
  name: "unlock",

  mounted() {
    if (this.$route.query.user === undefined || this.$route.query.token === undefined) {
      this.$awn.alert(this.$t("unlock.bad_link"));
      this.$router.push("/")
    } else {
      this.unlockUser(this.$route.query.user, this.$route.query.token)
    }
  },

  methods: {

    unlockUser(user, key) {
      let form = {
        username: user,
        token: key
      }

      this.axios.post(process.env.VUE_APP_BACKEND + "/unlock", form)
          .then(() => {
            this.$awn.success(this.$t("unlock.unlocked"));
          })
          .catch(() => {
            this.$awn.alert(this.$t("unlock.error_on_unlock"));
          })
          .finally(() => {
            this.$router.push("/")
          })
    }

  }
}
</script>

<template>
  <div class="content">
    <h1>{{ $t('unlock.ongoing_title') }}</h1>
    <b-spinner label="Spinning" style="width: 5rem; height: 5rem;" type="grow" variant="success"></b-spinner>
  </div>
</template>

<style scoped>

.content {
  text-align: center;
  font-size: 72px;
}

h1 {
  padding-top: 60px;
  padding-bottom: 40px
}

</style>