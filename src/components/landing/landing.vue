<script>
import AskModal from "./askModal";
import ChangePasswordModal from "./changePasswordModal";
import toaster from "@/components/mixins/toaster";
import create_totp from "@/components/landing/create_totp";
import check_totp from "@/components/landing/check_totp";
import revoke_totp from "@/components/landing/revoke_totp";

export default {
  mixins: [toaster],
  components: {revoke_totp, check_totp, create_totp, AskModal, ChangePasswordModal},
  data() {
    return {
      features: {
        "disable_unlock": true,
        "disable_password_update": false,
        "disable_password_reinitialization": false,
        "disable_totp": false
      }
    }
  },
  methods: {
    unlockUser() {
      this.$refs.unlock.display()
    },
    resetPassword() {
      this.$refs.reset.display()
    },
    changePassword() {
      this.$refs.change.display()
    },
    createTOTP() {
      this.$refs.create_totp.display()
    },
    checkTOTP() {
      this.$refs.check_totp.display()
    },
    revokeTOTP() {
      this.$refs.revoke_totp.display()
    }
  },
  created() {
    this.axios.get(process.env.VUE_APP_BACKEND + "/config")
        .then(response => {
          this.features = response.data
        })
        .catch(() => {
          this.$awn.alert(this.$t("landing.load_config.request_error"), this.toasterLabels)
        })
  }

}
</script>

<template>
  <div>
    <div class="landing">
      <b-jumbotron v-on:click="features.disable_unlock ? true :  unlockUser()"
                   :class="features.disable_unlock ? 'no-hover' : ''">
        <i class="fas fa-unlock-alt"></i>
        <h1>{{ $t('landing.unlock') }}</h1>
      </b-jumbotron>
      <b-jumbotron v-on:click="features.disable_password_update ? true :  changePassword()"
                   :class="features.disable_password_update ? 'no-hover' : ''">
        <i class="fas fa-sync-alt"></i>
        <h1>{{ $t('landing.change') }}</h1>
      </b-jumbotron>
      <b-jumbotron v-on:click="features.disable_password_reinitialization ? true :  resetPassword()"
                   :class="features.disable_password_reinitialization ? 'no-hover' : ''">
        <i class="fas fa-key"></i>
        <h1>{{ $t('landing.reset') }}</h1>
      </b-jumbotron>
    </div>

    <b-alert style="margin-top: 20px; text-align: center" show variant="info">
      <span class="fas fa-info-circle" style="font-size: unset; padding-right: 10px;"></span>
      <span v-html="$t('landing.info_new_users')"></span>
    </b-alert>

    <div v-if="features.disable_totp === false">
      <hr>
      <h2 style="padding: 15px; text-align: center">{{ $t('landing.totp_title') }} <sup><i class="fas fa-question-circle" v-b-tooltip="$t('landing.totp_tooltip')" style="font-size: 24px"></i></sup></h2>

      <div class="landing">
        <b-jumbotron v-on:click="createTOTP()">
          <i class="fas fa-plug"></i>
          <h1>{{ $t('landing.create_totp') }}</h1>
        </b-jumbotron>
        <b-jumbotron v-on:click="checkTOTP()">
          <i class="fas fa-user-check"></i>
          <h1>{{ $t('landing.verify_totp') }}</h1>
        </b-jumbotron>
        <b-jumbotron v-on:click="revokeTOTP()">
          <i class="fas fa-trash-alt"></i>
          <h1>{{ $t('landing.revoke_totp') }}</h1>
        </b-jumbotron>
      </div>
    </div>

    <ask-modal ref="unlock" method="unlock" :totp="!features.disable_totp"></ask-modal>
    <ask-modal ref="reset" method="reinitialize" :totp="!features.disable_totp"></ask-modal>
    <create_totp ref="create_totp"></create_totp>
    <change-password-modal ref="change"></change-password-modal>
    <check_totp ref="check_totp"></check_totp>
    <revoke_totp ref="revoke_totp"></revoke_totp>

  </div>
</template>


<style scoped>

.jumbotron.no-hover {
  background: #333;
  cursor: unset;
}

.jumbotron.no-hover:hover {
  background: #333;
}

.fas {
  font-size: 72px;
}

.jumbotron {
  width: 30%;
  padding: 40px 15px;
  text-align: center;
  cursor: pointer;
  background: #125f3e;
  color: #f7f7f7;
  transition-property: background;
  transition-duration: 2s;
}

.jumbotron h1 {
  padding-top: 40px;
  font-size: 32px;
  color: #f7f7f7;
  padding-right: 10px;
  padding-left: 10px;
}

.jumbotron:hover {
  background: #00d975;
}

.landing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px
}

@media screen and (max-width: 870px) {
  .landing {
    flex-direction: column;
  }

  .jumbotron {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

}

</style>