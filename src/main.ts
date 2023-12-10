import { createApp } from 'vue';
import '@/styles/main.css';
import '@/styles/tailwind.css';
import router from '@/router';
import App from '@/App.vue';

const app = createApp(App);

app.use(router);
app.mount('#app');
