import {ApiConfig} from "./config"

/**
 * @module Fetchers
 * @description Functions to fetch data from API.
 */

/**
 * Fetch list of matching movie propositions.
 * @param {String} keyWord - Title of the searched movie
 */
export function fetchMoviesList(keyWord) {
    return fetch(`${ApiConfig.BASE_URL}/search/movie?api_key=${ApiConfig.KEY}&query=${keyWord}`)
        .then(response => response.json())
}

/**
 * Fetch details about single movie from TMDb.
 * @param {Number} id - MovieDescription id from TMDb database
 */
export function fetchMovie(id) {
    return fetch(`${ApiConfig.BASE_URL}/movie/${id}?api_key=${ApiConfig.KEY}&language=en-US`)
        .then(response => response.json())
}