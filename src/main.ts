import 'uno.css';
import '@/sass/index.scss';

import { createApp } from 'vue';
import App from '@/App.vue';

// Vue plugins
import { router } from '@/router';
import { pinia } from '@/pinia';

// Ipc
import { initIpcLog } from './plugins/ipc/initIpcLog';


createApp(App)
  .use(router)
  .use(pinia)

  .mount('#app')
  .$nextTick(() => {
    initIpcLog();
  });
