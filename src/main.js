import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import vue3GoogleLogin from 'vue3-google-login';

// const CLIENT_ID= '379495262041-9ngd8icdbpdf4o7vbtru2suia4kibjhe.apps.googleusercontent.com'
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID


const pinia = createPinia();

if (localStorage.getItem("state")) {
    pinia.state.value = JSON.parse(localStorage.getItem("state"));
}

watch(
    pinia.state,
    (state) => {
        localStorage.setItem("state", JSON.stringify(state));
    },
    {deep: true}
);

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: CLIENT_ID
})


app.mount('#app')
