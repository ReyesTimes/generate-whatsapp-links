import Login from './components/Login.vue';
import Home from './components/Home.vue';
import History from './components/History.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/history', component: History, name: 'history' },
];

export default routes;
