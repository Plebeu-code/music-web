import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router"
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// Import CSS PrimeVue
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(ToastService);
app.use(PrimeVue, {
  ripple: true, // Se desejar usar o efeito ripple nos botões e componentes.
  inputVariant: "filled",
  theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        cssLayer: false,
        darkModeSelector: '.my-app-dark'
    }
  }
});

app.mount('#app')