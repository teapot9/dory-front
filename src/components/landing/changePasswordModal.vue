<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],
  data() {

    return {
      form: {
        username: "",
        old_password: "",
        new_password: "",
      },
      show: false,
      isDisabled: false,
      repeat: ""
    }
  },

  methods: {

    display(){
      this.form = {
        username: "",
        old_password: "",
        new_password: ""
      };
      this.repeat = "";
      this.show=true;
    },

    sendRequest: function () {
      this.isDisabled = true

      this.axios.post(process.env.VUE_APP_BACKEND+ "/change_password", this.form)
          .then(() => {
            this.$awn.success(this.$t("landing.change_modal.request_sent"), this.toasterLabels);
            this.show=false;
          })
          .catch(() => {
            this.$awn.alert(this.$t("landing.change_modal.request_error"), this.toasterLabels);
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
    <template v-slot:modal-title>{{$t("landing.change_modal.title")}}</template>
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
        :label="$t('modal.input.old_password')"
        label-for="input-2">
      <b-form-input
          id="input-2"
          class="form-control"
          type="password"
          v-model="form.old_password"
      />
    </b-form-group>

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

    <b-alert variant="info" show v-html="$t('modal.respect_password_info')"></b-alert>

    <div class="text-right">
      <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">{{$t("modal.cancel")}}</b-button>
      <span style="margin-right: 20px;"/>
      <b-button class="mt-3 btn-success" @click="sendRequest()" :disabled="isDisabled || form.new_password.length === 0 || form.new_password !== repeat">{{$t("modal.send")}}</b-button>
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