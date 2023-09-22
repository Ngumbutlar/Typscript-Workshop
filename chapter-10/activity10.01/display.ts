import {Movie } from "./interfaces";

export const showResuls = (movie: Movie) => {
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdropUrl}`;
    document.body.style.backgroundImage = `url('${backdropUrl}')`;

    const result = document.getElementById("result")!;
    const poster = movie.posterUrl
        ? `<img scr="https://image.tmdb.org/t/p/w500/${movie.posterUrl}" class="poster" />`
        : `<img src="https://via.placeholder.com/500x750.png?text=No+Poster+Available" class="poster"/>`

    result.innerHTML = `<div class="main-part">
        <div class="title">${movie.title} (${movie.releaseDate.getFullYear()})</div>
    `
}

export const clearResults = (search: string) => {
   document.body.style.backgroundImage = "";
}
