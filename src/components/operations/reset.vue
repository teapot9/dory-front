<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],
  name: "unlock",

  data() {
    return {
      totp: false,
      form: {
        new_password: "",
        username: "",
        authentication: {
          token: "",
          totp: ""
        }
      },
      repeat: "",
      loading: false
    }
  },

  mounted() {
    if (this.$route.query.user === undefined || (this.$route.query.token === undefined && !this.$route.query.totp)) {
      this.$awn.alert(this.$t("unlock.bad_link"), this.toasterLabels);
      this.$router.push("/")
    } else {
      this.form.username = this.$route.query.user
      this.form.authentication.token = this.$route.query.token === undefined ? "" : this.$route.query.token
      this.totp = !!this.$route.query.totp
    }
  },

  methods: {

    changePassword() {
      this.loading = true;
      this.axios.post(process.env.VUE_APP_BACKEND + "/reinitialize", this.form)
          .then(() => {
            this.$awn.success(this.$t("reinitialize.reinitialized"), this.toasterLabels);
            this.$router.push("/")
          })
          .catch(() => {
            this.$awn.alert(this.$t("reinitialize.error_on_reinitialization"), this.toasterLabels);
          })
          .finally(() => {
            this.loading = false;
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
            :disabled="!totp"
            v-model="form.username"
        />
      </b-form-group>

      <br/>
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
      <br/>

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

      <b-form-group v-if="totp"
                    id="input-group-5"
                    :label="$t('modal.input.totp')"
                    label-for="input-5">
        <b-form-input
            id="input-5"
            class="form-control"
            type="text"
            placeholder="000000"
            :state="/^[0-9]{6}$/.test(form.authentication.totp)"
            v-model="form.authentication.totp"
        />
      </b-form-group>
      <b-form-group v-else
                    id="input-group-6"
                    :label="$t('modal.input.security_token')"
                    label-for="input-6">
        <b-form-input
            id="input-6"
            class="form-control"
            disabled
            type="text"
            v-model="form.authentication.token"
        />
      </b-form-group>
      <br/>

      <b-button type="submit" variant="primary"
                :disabled="form.new_password.length === 0 || form.new_password !== repeat || (form.authentication.token.length === 0 && form.authentication.totp.length !== 6)">
        {{ $t('modal.send') }}
      </b-button>
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