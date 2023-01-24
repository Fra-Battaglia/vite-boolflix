<script>

	export default{
		props: {
			tv: Object
		},

		methods: {
    		stars() {
				return Math.round(this.tv.vote_average / 2);
			}
		}
	}

</script>

<template>
	<div class="card m-1 border-0 flex-shrink-0">

		<!-- TV Series Cover -->

		<div v-if="tv.poster_path == null" class="card-cover">
			<img src="https://about.netflix.com/images/backgrounds/background-texture-s.jpg" alt="" class="cover-img">

			<div class="position-absolute top-50 start-50 translate-middle text-center cover-404">
				<img src="../assets/Netflix_Symbol_RGB.svg" alt="N symbol" class="n-symbol">
				<h1 class="text-huge">404</h1>
				<h2>No cover found</h2>
			</div>
			
		</div>
		<div v-else class="card-cover"><img :src="`https://image.tmdb.org/t/p/w500/${tv.poster_path}`" alt="" class="cover-img"></div>

		<!-- <img 
		:src="
			tv.poster_path == null
			? `https://about.netflix.com/images/backgrounds/background-texture-s.jpg`
			: `https://image.tmdb.org/t/p/w500/${tv.poster_path}`"		
		alt="" class="cover"/> -->

		<!-- TV Series Info -->
		
		<div class="card-content p-3">
			<h4>{{ tv.original_name }}</h4>

			
			<!-- Description -->
			
			<p class="description">{{ tv.overview }}</p>
			
			<!-- Language -->

			<div class="language">
				<span>Original language: </span>
				<img
					:src="
						tv.original_language == 'en' 
						? `https://www.countryflagicons.com/FLAT/32/GB.png`
	
						: tv.original_language == 'ja'
						? `https://www.countryflagicons.com/FLAT/32/JP.png`
	
						: tv.original_language == 'ko'
						? `https://www.countryflagicons.com/FLAT/32/KR.png`

						: tv.original_language == 'cs'
						? `https://www.countryflagicons.com/FLAT/32/CZ.png`

						: tv.original_language == 'hi'
						? `https://www.countryflagicons.com/FLAT/32/IN.png`
	
						: `https://www.countryflagicons.com/FLAT/32/${(tv.original_language).toUpperCase()}.png`
					" 
				alt=""/>
			</div>

			<!-- Vote -->

			<div class="vote d-flex">
				<span>Vote:</span>
				<div class="stars mx-1">
					<i v-for="item in stars()" class="fa-solid fa-star color-red"></i>
					<i v-for="item in 5 - stars()" class="fa-regular fa-star"></i>
				</div>
				<span>{{ Math.round(tv.vote_average / 2) }}</span>
			</div>
			
		</div>
	</div>
</template>

<style scoped lang="scss">
	@use './styles/partials/variables' as *;
	@use './styles/partials/mixins' as *;
</style>