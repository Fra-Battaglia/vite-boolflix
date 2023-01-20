<script>
	import { store } from '../store';
	import AppSearch from './AppSearch.vue';
	import axios from 'axios';
	export default {
		
		data() {
			return {
				store
			}
		},

		components: {
			AppSearch
		},

		methods: {
			get_media() {
				let my_api = store.api_movies + store.search_text;
				let my_series_api = store.api_series + store.search_text;

				axios.get(my_api).then((response) => {
					store.movie_list = response.data.results;
				})

				axios.get(my_series_api).then((response) => {
					store.series_list = response.data.results;
				})
			}
		}
	}
</script>

<template>
	<header class="py-4">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-4 d-flex align-items-center">
					<a href="#"><img src="../assets/Netflix_Logo_RGB.svg" alt="netflix" class="header-logo"></a>
				</div>
				<div class="col-4 d-flex align-items-center"><AppSearch @search="get_media"/></div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;

	header {
		background-color: $dark-color;
		img.header-logo {	
			height: 40px;
		}

		h1 {
			color: $primary-color;
		}
	}

</style>