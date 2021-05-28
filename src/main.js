import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyARuAyDjoJpUmMIPQhYSga8qEE_6QhWyQM",
  authDomain: "vue4-4ff42.firebaseapp.com",
  projectId: "vue4-4ff42",
  storageBucket: "vue4-4ff42.appspot.com",
  messagingSenderId: "672732277341",
  appId: "1:672732277341:web:658d69196d73a1af97bbb4",
  measurementId: "G-C3GHL7ER7X"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
