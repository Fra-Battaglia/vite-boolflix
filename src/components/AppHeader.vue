<script>
	export default {

	}
</script>

<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col">
					<h1 class="m-0">BOOLFLIX</h1>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;

	header {
		background-color: $dark-color;

		h1 {
			color: $primary-color;
		}
	}
</style>