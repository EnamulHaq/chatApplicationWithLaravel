require('./bootstrap');

import {createApp} from "vue";
const app = createApp({});
import chat from './components/Chat';
app.component('chat', chat);
app.mount('#app');
