<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],
  name: "revoke",

  data() {
    return {
      type: null,
      form: {
        username: "",
        authentication: {
          token: "",
          password: ""
        },
      },
      isDisabled: false,
      repeat: ""
    }
  },

  mounted() {
    this.type = this.$route.query.type ?? "password"
    if (
      this.$route.query.user === undefined ||
      !["password", "mail"].includes(this.type) || (
        this.type === "mail" && this.$route.query.token === undefined
    )) {
      this.$awn.alert(this.$t("unlock.bad_link"), this.toasterLabels);
      this.$router.push("/")
    } else {
      this.form.username = this.$route.query.user
      this.form.authentication.token = this.$route.query.token === undefined ? "" : this.$route.query.token
    }
  },

  methods: {

    sendRequest: function () {
      this.isDisabled = true

      this.axios.post(process.env.VUE_APP_BACKEND+ "/totp/revoke", this.form)
          .then(() => {
            this.$awn.success(this.$t("landing.totp_toaster.revoke"), this.toasterLabels);
            this.$router.push("/")
          })
          .catch(() => {
            this.$awn.alert(this.$t("landing.totp_toaster.error_on_revoke"), this.toasterLabels);
          })
          .finally(() => {
            this.isDisabled=false
          })
    },

  },
}
</script>

<template>
  <div class="content">
    <h1>{{$t("landing.revoke_modal.title")}}</h1>

    <b-form-group
        id="input-group-1"
        :label="$t('modal.input.username')"
        label-for="input-1">
      <b-form-input
          id="input-1"
          class="form-control"
          type="text"
          v-model="form.username"
      />
    </b-form-group>

    <b-form-group
        id="input-group-2"
        v-if="type === 'password'"
        :label="$t('modal.input.password')"
        label-for="input-2">
      <b-form-input
          id="input-2"
          class="form-control"
          type="password"
          v-model="form.authentication.password"
      />
    </b-form-group>

    <b-form-group
          id="input-group-6"
          v-if="type === 'mail'"
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

    <div class="text-right">
      <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">{{$t("modal.cancel")}}</b-button>
      <span style="margin-right: 20px;"/>
      <b-button class="mt-3 btn-success" @click="sendRequest()" :disabled="isDisabled || (form.authentication.password.length === 0 && form.authentication.token.length === 0) || form.username.length === 0">{{$t("modal.send")}}</b-button>
    </div>
  </div>
</template>


<style scoped>

.text-right {
  margin-right: 0;
  text-align: right;
}

.btn-success {
  color: #f7f7f7;
}

.btn-success:hover {
  background: #012f2d
}
</style>
