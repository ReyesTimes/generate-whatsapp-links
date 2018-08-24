import Login from './components/Login.vue';
import Home from './components/Home.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
];

export default routes;
