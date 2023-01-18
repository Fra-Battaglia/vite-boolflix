import { reactive } from "vue";

export const store = reactive ({
	api_key: '5ab214ce791eb47bb350cb86680be475',
	api_movies: 'https://api.themoviedb.org/3/search/movie?api_key=5ab214ce791eb47bb350cb86680be475&language=en-US&query=',
	search_text: '',
	movie_list: [],
});