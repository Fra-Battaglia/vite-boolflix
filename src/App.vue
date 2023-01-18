<script>
	import { store } from './store.js'
	import AppHeader from './components/AppHeader.vue';
	import AppMain from './components/AppMain.vue';

	export default {
		data() {
			return {
				store
			}
		},
		components: {
			AppHeader,
			AppMain,
		},

		
	}

	console.log(store.movie_list);
</script>

<template>
	<AppHeader />
	<AppMain />
</template>

<style lang="scss">
	@use './components/styles/partials/variables' as *;
	@use './components/styles/partials/mixins' as *;

	@use './components/styles/generals.scss' as *;
</style>
