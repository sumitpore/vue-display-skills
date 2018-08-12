import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import VeeValidate from 'vee-validate';

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
	{
		path: '/',
		component: Skills
	},
	{
		path: '/about',
		component: About
	}
	]
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
