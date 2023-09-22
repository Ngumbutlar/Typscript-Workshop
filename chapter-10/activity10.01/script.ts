import { clearResults, showResuls } from "./display";
import { Character, Movie, MovieResultsApi, PeopleResultApi, searchResultsApi } from "./interfaces";

const server = "https://api.themoviedb.org/3/";
const apiKey = 'df97141ecbdacbf3968f633c649517e1';

const getSearchUrl = (value: string) => `${server}search/movie?api_key=${apiKey}&query=${value}`;
const getMovieUrl = (movieId: number) => `${server}movie/${movieId}?api_key=${apiKey}`;
const getPeopleUrl = (movieId: number) => `${server}movie/${movieId}/credits?api_key=${apiKey}`;


const search = (value: string) => {
    const xhr1 = new XMLHttpRequest;
    const url1 = getSearchUrl(value);
    xhr1.open("GET", url1);

    xhr1.onload = function () {
        const data = JSON.parse(this.response) as searchResultsApi;
        if (data.results.length !== 0) {
            const resultMovie = data.results[0];
            const movieXhr = new XMLHttpRequest();
            const movieUrl = getMovieUrl(resultMovie.id);

            movieXhr.open('GET', movieUrl);
            movieXhr.onload = function () {
                const movieData: MovieResultsApi = JSON.parse(this.response);
                const peopleXhr = new XMLHttpRequest();
                const peopleUrl = getPeopleUrl(resultMovie.id);


                peopleXhr.open('GET', movieUrl);
                peopleXhr.onload = function () {
                    const data = JSON.parse(this.response) as PeopleResultApi;
                    data.cast.sort((f, s) => f.order - s.order);
                    const mainActors = data.cast.slice(0, 6);
                    const characters : Character[] = mainActors.map(actor => ({
                        name: actor.character,
                        actor: actor.name,
                        image: actor.profile_path
                    }))

                    const directors = data.crew
                        .filter(person => person.department === "Directing" && person.job === "Director")
                        .map(person => person.name)
                    const directedBy = directors.join(" & ");

                    const writers = data.crew
                        .filter(person => person.department === "Writing" && person.job === "Writer")
                        .map(person => person.name)
                    const writenBy = writers.join(" & ");

                    const movie: Movie = {
                        id: movieData.id,
                        title: movieData.title,
                        tagline: movieData.tagline,
                        releaseDate: new Date(movieData.release_date),
                        posterUrl: movieData.poster_path,
                        backdropUrl: movieData.backdrop_path,
                        overview: movieData.overview,
                        runtime: movieData.runtime,
                        characters: characters,
                        directedBy: directedBy,
                        writenBy: writenBy
                    }

                    showResuls();

                }
                peopleUrl.send();

            }
            movieUrl.send();
        }
        else {
            clearResults(value);
        }
    }

    xhr1.send();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search")!.addEventListener("click", () => {
        const movieInput = document.getElementById("title") as HTMLInputElement;
        const movieTitle = movieInput.value;
        search(movieTitle);
    });

    document.getElementById("title")!.addEventListener("keyup", (event) => {
        if (event.key !== "Enter") {
            return;
        }
        document.getElementById("search")!.click();
        event.preventDefault();
    })
})

