<script>
	import { store } from '../store.js';

	export default{
		data() {
			return {
				store
			}
		},
	}
</script>

<template>
	<div class="search d-flex w-25">
		<input type="text" class="form-control" placeholder="movies" v-model="store.search_text">
		<button class="btn btn-outline-dark" @click="$emit('search')" type="submit">cerca</button>
	</div>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;
</style>