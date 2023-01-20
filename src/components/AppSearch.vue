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
	<div class="search d-flex w-100">
		<input type="text" class="form-control  me-3" placeholder="movies" v-model="store.search_text" @keyup.enter="$emit('search')">
		<button class="btn btn-outline-light" @click="$emit('search')" type="submit">cerca</button>
	</div>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;
</style>