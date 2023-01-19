<script>

	export default{
		props: {
			movie: Object
		},

		computed: {
    		stars() {
				let stars = [];
				for (let i = 0; i < 5; i++) {
					if (i < Math.round(this.movie.vote_average / 2)) {
					stars.push(i);
					}
				}
				return stars;
			},

			empty_stars() {
				let empty_stars = []
				for (let i = 0; i < 5 - Math.round(this.movie.vote_average / 2); i++) {
					empty_stars.push(i);
				}
				return empty_stars;
 			}
 		}
	}

</script>

<template>
	<div class="card m-1 border-0">
		<h4>{{ movie.original_title }}</h4>
		<img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
		<div>
			<img 
			:src="
				movie.original_language == 'en' 
				? `https://www.countryflagicons.com/FLAT/32/GB.png` 
				: `https://www.countryflagicons.com/FLAT/32/${(movie.original_language).toUpperCase()}.png`
			" 
			alt=""/>
		</div>
		<div>
			<i v-for="item in stars" class="fa-solid fa-star"></i>
			<i v-for="item in empty_stars" class="fa-regular fa-star"></i>
		</div>
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