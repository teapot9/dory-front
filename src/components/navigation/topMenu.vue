<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="nav-link nobg" to="/"><img src="images/logo.png" height="54px"/></router-link>
      </div>
      <b-select class="lang" v-on:change="changeLang" v-model="lang">
        <b-select-option value="fr">🇫🇷 Français</b-select-option>
        <b-select-option value="en">🇬🇧 English</b-select-option>
      </b-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "fr"
    }
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.lang
    }
  }
}
</script>

<style>
.lang {
  margin-right: 15px !important;
  padding: 4px;
  background: rgba(0,0,0,0.2);
  border-color: #1a1e21;
  color: #ccc;
}

.lang option {
  background: #012f2d;

}
</style>