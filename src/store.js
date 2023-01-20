import { reactive } from "vue";

export const store = reactive ({
	api_key: '5ab214ce791eb47bb350cb86680be475',
	api_movies: 'https://api.themoviedb.org/3/search/movie?api_key=5ab214ce791eb47bb350cb86680be475&language=en-US&query=',
	api_series: 'https://api.themoviedb.org/3/search/tv?api_key=5ab214ce791eb47bb350cb86680be475&language=en-US&query=',

	api_movies_popular: 'https://api.themoviedb.org/3/movie/popular?api_key=5ab214ce791eb47bb350cb86680be475&language=en-US&page=1',
	api_tv_popular: 'https://api.themoviedb.org/3/tv/popular?api_key=5ab214ce791eb47bb350cb86680be475&language=en-US&page=1',
	search_text: '',
	movie_list: [],
	series_list: [],
});