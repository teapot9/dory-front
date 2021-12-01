<script>
export default {
  name: "unlock",

  data(){
    return {
      form: {
        new_password: "",
        username: "",
        token: "",
      },
      repeat: "",
      loading: false
    }
  },

  mounted() {
    if (this.form.token === "" && (this.$route.query.user === undefined || this.$route.query.token === undefined)) {
      this.$awn.alert(this.$t("unlock.bad_link"));
      this.$router.push("/")
    } else {
      this.form.username = this.$route.query.user
      this.form.token = this.$route.query.token
    }
  },

  methods: {

    changePassword() {
      this.loading = true;
      this.axios.post(process.env.VUE_APP_BACKEND + "/reinitialize", this.form)
          .then(() => {
            this.$awn.success(this.$t("reinitialize.reinitialized"));
            this.$router.push("/")
          })
          .catch(() => {
            this.$awn.alert(this.$t("reinitialize.error_on_reinitialization"));
          })
      .finally(() => {
        this.loading=false;
      })
    }

  }
}
</script>

<template>
  <div class="content">
    <h1>{{ $t('reinitialize.title') }}</h1>

    <b-alert variant="info" show v-html="$t('modal.respect_password_info')"></b-alert>


    <b-form v-on:submit.prevent="changePassword" v-if="!loading">
      <b-form-group
          id="input-group-1"
          :label="$t('modal.input.username')"
          label-for="input-1">
        <b-form-input
            id="input-1"
            class="form-control"
            type="text"
            disabled
            v-model="form.username"
        />
      </b-form-group>

      <br />
      <b-form-group
          id="input-group-3"
          :label="$t('modal.input.new_password')"
          label-for="input-3">
        <b-form-input
            id="input-3"
            class="form-control"
            type="password"
            v-model="form.new_password"
        />
      </b-form-group>
      <br />

      <b-form-group
          id="input-group-4"
          :label="$t('modal.input.new_password_repeat')"
          label-for="input-4">
        <b-form-input
            id="input-4"
            class="form-control"
            type="password"
            :state="form.new_password.length !== 0 ? form.new_password === repeat : null"
            v-model="repeat"
        />
      </b-form-group>
      <br />

      <b-button type="submit" variant="primary" :disabled="form.new_password.length === 0 || form.new_password !== repeat">{{ $t('modal.send') }}</b-button>
    </b-form>
    <b-spinner v-else label="Spinning" style="width: 5rem; height: 5rem;" type="grow" variant="success"></b-spinner>


  </div>
</template>

<style scoped>

.content {
  text-align: center;
}

h1 {
  padding-top: 60px;
  padding-bottom: 40px
}

</style>