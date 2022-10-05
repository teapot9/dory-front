<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],
  name: "unlock",

  data() {
    return {
      totp: false,
      form: {
        username: "",
        authentication: {
          token: "",
          totp: ""
        }
      },
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
      if(this.form.username.length !== 0 && this.form.authentication.token.length !== 0) {
        this.changePassword()
      }
    }
  },

  methods: {

    changePassword() {
      this.loading = true;
      this.axios.post(process.env.VUE_APP_BACKEND + "/unlock", this.form)
          .then(() => {
            this.$awn.success(this.$t("unlock.unlocked"), this.toasterLabels);
            this.$router.push("/")
          })
          .catch(() => {
            this.$awn.alert(this.$t("unlock.error_on_unlock"), this.toasterLabels);
            this.$router.push("/")
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
    <h1>{{ $t('unlock.title') }}</h1>


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

      <b-form-group v-if="totp"
                    id="input-group-5"
                    :label="$t('modal.input.totp')"
                    label-for="input-5">
        <b-form-input
            id="input-5"
            class="form-control"
            type="text"
            :state="/^[0-9]{6}$/.test(form.authentication.totp)"
            placeholder="000000"
            v-model="form.authentication.totp"
        />
      </b-form-group>
      <br/>

      <b-button type="submit" variant="primary"
                :disabled="form.authentication.totp.length !== 6">
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