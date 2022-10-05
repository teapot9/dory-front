<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],
  data() {

    return {
      form: {
        username: "",
        password: "",
      },
      qrcode_data: "",
      show: false,
      isDisabled: false,
      repeat: ""
    }
  },

  methods: {

    display(){
      this.form = {
        username: "",
        password: "",
      };
      this.repeat = "";
      this.show=true;
    },

    sendRequest: function () {
      this.isDisabled = true

      this.axios.post(process.env.VUE_APP_BACKEND+ "/totp/create", this.form)
          .then(response => {
            this.$awn.success(this.$t("landing.totp_toaster.create"), this.toasterLabels);
            this.qrcode_data = response.data.totp
          })
          .catch(() => {
            this.$awn.alert(this.$t("landing.totp_toaster.creation_error"), this.toasterLabels);
          })
          .finally(() => {
            this.isDisabled=false
          })
    },

  },
}
</script>

<template>
  <b-modal id="bv-modal-example" hide-footer v-model="show" size="lg" no-close-on-backdrop>
    <template v-slot:modal-title>{{$t("landing.create_totp")}}</template>
    <div v-if="qrcode_data.length !== 0" style="text-align: center">
      <qrcode-vue :value="qrcode_data" :size="300" level="H"/>

      <b-alert style="margin-top: 20px; text-align: center" show variant="info">
        <span class="fas fa-info-circle" style="font-size: unset; padding-right: 10px;"></span>
        <span v-html="$t('create_totp.use_authenticator')"></span>
      </b-alert>

      <div class="text-right">
        <b-button class="mt-3" @click="qrcode_data=''; $bvModal.hide('bv-modal-example')">{{$t("modal.close")}}</b-button>
      </div>
    </div>

    <div v-else>
    <br/>

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
        :label="$t('modal.input.password')"
        label-for="input-2">
      <b-form-input
          id="input-2"
          class="form-control"
          type="password"
          v-model="form.password"
      />
    </b-form-group>

    <div class="text-right">
      <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">{{$t("modal.cancel")}}</b-button>
      <span style="margin-right: 20px;"/>
      <b-button class="mt-3 btn-success" @click="sendRequest()" :disabled="isDisabled || form.password.length === 0 || form.username.length === 0">{{$t("modal.send")}}</b-button>
    </div>
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