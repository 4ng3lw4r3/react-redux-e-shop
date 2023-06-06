const movieService = async (searchWord) => {
    const response = await fetch (`http://www.omdbapi.com/?apikey=ff72a737&s=${searchWord}`);
    const movies = await response.json();
    return movies;
}

export default movieService