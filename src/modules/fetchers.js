import {ApiConfig} from "./config"

/**
 * @module Fetchers
 * @description Functions to fetch data from API.
 */

/**
 * Fetch list of matching movie propositions.
 * @param {String} keyWord - Title of the searched movie
 * @param {Function} callback - Callback function.
 */
export function fetchMoviesList(keyWord, callback) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiConfig.key}&query=${keyWord}`)
        .then(response => response.json())
        .then(json => {
            json.results = json.results
                .sort((a, b) =>
                    (a.vote_count > b.vote_count) ? -1 : 1);
            callback(json);
        })
}

/**
 * Fetch details about single movie from TMDb.
 * @param {Number} id - Movie id from TMDb database
 * @param {Function} callback - Callback function.
 */
export function fetchMovie(id, callback) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiConfig.key}&language=en-US`)
        .then(response => response.json())
        .then(json => callback(json))
}