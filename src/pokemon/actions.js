const NEXT_POKEMON = 'NEXT_POKEMON';
const PREVIOUS_POKEMON = 'PREVIOUS_POKEMON';
const LOAD_POKEMON_DETAILS_START = 'LOAD_POKEMON_DETAILS_START';
const LOAD_POKEMON_DETAILS_SUCCESS = 'LOAD_POKEMON_DETAILS_SUCCESS';
const LOAD_POKEMON_DETAILS_FAILED = 'LOAD_POKEMON_DETAILS_FAILED';

export const actionTypes = {
    NEXT_POKEMON,
    PREVIOUS_POKEMON
};

export const nextPokemon = () =>{
    return {
        type: NEXT_POKEMON
    };
};

export const previousPokemon = () => {
    return {
        type: PREVIOUS_POKEMON
    };
};

export const loadPokemonDetailsStart = () => {
    return {
        type: LOAD_POKEMON_DETAILS_START
    };
};

export const loadPokemonDetailsSuccess = (data) => {
    const {pokemon, previousPokemon, nextPokemon} = data;
    return {
        type: LOAD_POKEMON_DETAILS_SUCCESS,
        pokemon,
        previousPokemon,
        nextPokemon
    };
};

export const loadPokemonDetailsFailure = () => {
    return {
        type: LOAD_POKEMON_DETAILS_FAILED
    };
};

export const loadPokemDetails = (pokedexDetails) => {

};