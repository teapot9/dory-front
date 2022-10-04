<script>
import AskModal from "./askModal";
import ChangePasswordModal from "./changePasswordModal";

export default {
  components: {AskModal, ChangePasswordModal},
  methods: {
    unlockUser() {
      this.$refs.unlock.display()
    },
    resetPassword() {
      this.$refs.reset.display()
    },
    changePassword() {
      this.$refs.change.display()
    }
  },
  computed: {
    isOpenLDAP() {
      if (process.env.VUE_APP_OPENLDAP === undefined) {
        return false;
      }
      return process.env.VUE_APP_OPENLDAP === 'true';
    }
  }
}
</script>

<template>
  <div>
    <div class="landing">
      <b-jumbotron :id="isOpenLDAP? 'disabled-jumbo': ''" v-on:click="isOpenLDAP ? true :  unlockUser()" :class="isOpenLDAP ? 'no-hover' : ''">
        <i class="fas fa-unlock-alt"></i>
        <h1>{{ $t('landing.unlock') }}</h1>
        <b-tooltip target="disabled-jumbo">{{ $t('landing.disabled_unlock') }}</b-tooltip>
      </b-jumbotron>
      <b-jumbotron v-on:click="changePassword()">
        <i class="fas fa-sync-alt"></i>
        <h1>{{ $t('landing.change') }}</h1>
      </b-jumbotron>
      <b-jumbotron v-on:click="resetPassword()">
        <i class="fas fa-key"></i>
        <h1>{{ $t('landing.reset') }}</h1>
      </b-jumbotron>
    </div>

    <b-alert style="margin-top: 20px; text-align: center" show variant="info"><span class="fas fa-info-circle" style="font-size: unset; padding-right: 10px;"></span><span v-html="$t('landing.info_new_users')"></span> </b-alert>

    <ask-modal ref="unlock" method="unlock"></ask-modal>
    <ask-modal ref="reset" method="reset"></ask-modal>
    <change-password-modal ref="change"></change-password-modal>

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
  width: 32%;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  cursor: pointer;
  background: #012f2d;
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