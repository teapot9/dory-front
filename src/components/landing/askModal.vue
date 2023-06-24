<script>
import toaster from "@/components/mixins/toaster";

export default {
  props: ['method', 'totp', 'password'],
  mixins: [toaster],

  data() {
    return {
      form: {
        username: "",
      },
      show: false,
      isDisabled: false
    }
  },

  methods: {

    display(){
      this.form = {
        username: "",
      };
      this.show=true;
    },

    usePassword() {
      this.$router.push("/"+this.$props.method+"?user="+this.form.username+"&type=password")
    },

    useTotp() {
      this.$router.push("/"+this.$props.method+"?user="+this.form.username+"&type=totp")
    },

    sendRequest: function () {
      this.isDisabled = true

      this.axios.post(process.env.VUE_APP_BACKEND+ "/request/"+this.$props.method, this.form)
          .then(() => {
            this.$awn.success(this.$t("landing."+this.$props.method+"_modal.request_sent"), this.toasterLabels);
            this.show=false;
          })
          .catch(() => {
            this.$awn.alert(this.$t("landing."+this.$props.method+"_modal.request_error"), this.toasterLabels);
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
    <template v-slot:modal-title>{{$t("landing."+method+"_modal.title")}}</template>
    <br/>

    <b-form-group
        id="input-group-1"
        :label="$t('modal.input.username')"
        label-for="input-1">
      <b-form-input
          id="input-1"
          class="form-control"
          type="text"
          ref="termName"
          v-model="form.username"
      />
    </b-form-group>


    <div class="text-right">
      <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">{{$t("modal.cancel")}}</b-button>
      <span style="margin-right: 20px;" v-if="totp === true"/>
      <b-button class="mt-3 btn-info" v-if="totp === true" @click="useTotp()" :disabled="isDisabled || form.username.length === 0">{{$t("modal.use_totp")}}</b-button>
      <span style="margin-right: 20px;" v-if="password === true"/>
      <b-button class="mt-3 btn-info" v-if="password === true" @click="usePassword()" :disabled="isDisabled || form.username.length === 0">{{$t("modal.use_password")}}</b-button>
      <span style="margin-right: 20px;"/>
      <b-button class="mt-3 btn-success" @click="sendRequest()" :disabled="isDisabled || form.username.length === 0">{{$t("modal.send_email")}}</b-button>
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

.btn-info {
  color: #fff;
}

.btn-info:hover {
  background: #012f2d
}

</style>
