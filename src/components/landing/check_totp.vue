<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],
  data() {

    return {
      form: {
        username: "",
        totp: "",
      },
      valid: false,
      sent: false,
      show: false,
      isDisabled: false,
      repeat: ""
    }
  },

  methods: {

    display(){
      this.form = {
        username: "",
        totp: "",
      };
      this.repeat = "";
      this.show=true;
    },

    sendRequest: function () {
      this.isDisabled = true

      this.axios.post(process.env.VUE_APP_BACKEND+ "/totp/verify", this.form)
          .then(() => {
            this.valid = true
          })
          .catch(() => {
            this.valid = false
          })
          .finally(() => {
            this.isDisabled=false
            this.sent = true

          })
    },

  },
}
</script>

<template>
  <b-modal id="bv-modal-example" hide-footer v-model="show" size="lg" no-close-on-backdrop>
    <template v-slot:modal-title>{{$t("landing.verify_totp")}}</template>
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
        :label="$t('modal.input.totp')"
        label-for="input-2">
      <b-form-input
          id="input-2"
          class="form-control"
          type="text"
          v-model="form.totp"
      />
    </b-form-group>

    <div v-if="sent" style="text-align: center">
      <b-alert style="margin-top: 20px; text-align: center" show variant="success" v-if="valid">
        <span class="fas fa-check" style="font-size: unset; padding-right: 10px;"></span>
        <span v-html="$t('verify_totp.valid')"></span>
      </b-alert>
      <b-alert style="margin-top: 20px; text-align: center" show variant="warning" v-else>
        <span class="fas fa-exclamation" style="font-size: unset; padding-right: 10px;"></span>
        <span v-html="$t('verify_totp.invalid')"></span>
      </b-alert>

    </div>

    <div class="text-right">
      <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">{{$t("modal.close")}}</b-button>
      <span style="margin-right: 20px;"/>
      <b-button class="mt-3 btn-success" @click="sendRequest()" :disabled="isDisabled || form.totp.length !== 6 || form.username.length === 0">{{$t("modal.send")}}</b-button>
    </div>
  </b-modal>
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