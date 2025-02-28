<script>
	import { store } from '../store';
	import AppSearch from './AppSearch.vue';
	import AppCard from './AppCard.vue';
	import AppCardTv from './AppCardTv.vue';
	import axios from 'axios';

	export default {
		data() {
			return {
				store
			}
		},
		components: {
			AppSearch,
			AppCard,
			AppCardTv
		},

		created() {
			this.popular()
		},

		methods: {
			popular() {
				axios.get(store.api_movies_popular).then((response) => {
					store.movie_list = response.data.results;
				})

				axios.get(store.api_tv_popular).then((response) => {
					store.series_list = response.data.results;
				})
			}
		}
	}
</script>

<template>
	<main class="mt-5">
		<div class="container">

			<!-- Movies -->

			<div class="row mb-5">
				<div class="col">
					<h2>Movies</h2>
					<div class="movies-list d-flex overflow-x-auto">
						<AppCard v-for="(item, index) in store.movie_list" :key="index" :movie="item" />
					</div>
				</div>
			</div>

			<!-- Series -->

			<div class="row mb-5">
				<div class="col">
					<h2>Tv Series</h2>
					<div class="series-list d-flex overflow-x-auto">
						<AppCardTv v-for="(item, index) in store.series_list" :key="index" :tv="item" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;
</style>