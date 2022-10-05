import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueAWN from "vue-awesome-notifications"
import KonamiCode from 'vue-konami-code'
import QrcodeVue from 'qrcode.vue'



import messages from './languages/messages.js'
import dateTimeFormats from "./languages/dateFormat";
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)
Vue.component('qrcode-vue', QrcodeVue)

//i18n
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "fr",
    messages,
    dateTimeFormats
});


Vue.use(KonamiCode, {callback: function () {
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/konami.css';
        head.appendChild(link);
    }});


//Toaster
let notifier = {
    durations: {global:6000},
    labels:{
        success: messages[i18n.locale].toaster.success,
        warning: messages[i18n.locale].toaster.warning,
        alert: messages[i18n.locale].toaster.error
    }
};

Vue.use(VueAWN, notifier);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

new Vue({
    i18n,
    router,
    render: h => h(App),
}).$mount('#app');
