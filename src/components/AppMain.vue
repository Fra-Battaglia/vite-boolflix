<script>
	import { store } from '../store';
	import AppSearch from './AppSearch.vue';
	import AppCard from './AppCard.vue';
	import AppCardTv from './AppCardTv.vue';
	import axios from 'axios';

	export default{
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
	<main>
		<div class="container">
			<div class="row">
				<div class="col">
					<AppSearch @search="get_media"/>
					<div class="cards d-flex justify-content-between flex-wrap">
						<AppCard v-for="(item, index) in store.movie_list" :key="index" :movie="item" />
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