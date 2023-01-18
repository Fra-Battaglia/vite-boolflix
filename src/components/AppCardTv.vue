<script>

	export default{
		props: {
			tv: Object
		}
	}

</script>

<template>
	<div class="card m-1 border-0">
		<h4>{{ tv.original_name }}</h4>
		<div><img :src="`https://www.countryflagicons.com/FLAT/32/${(tv.original_language).toUpperCase()}.png`" alt="" /></div>
		<div>{{ tv.vote_average }}</div>
	</div>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;

	.card {
		width: 300px;
		background-color: $dark-color;
	}
</style>