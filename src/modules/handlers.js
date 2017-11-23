/**
 * @module Handlers
 * @description Functions to handle application state changes.
 */

/**
 * Handler for a input onChange event
 * @param {Event} e - DOM onChange event.
 */
export function handleChange(e) {
    this.setState({
        [e.target.id]: e.target.value
    });
}