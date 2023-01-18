<script>

	export default{
		props: {
			movie: Object
		}
	}

</script>

<template>
	<div class="card m-1">
		<h4>{{ movie.original_title }}</h4>
		<div>{{ movie.original_language }}</div>
		<div>{{ movie.vote_average }}</div>
	</div>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;

	.card {
		width: 300px;
	}
</style>