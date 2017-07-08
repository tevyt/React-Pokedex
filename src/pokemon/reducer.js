const NEXT_POKEMON = 'NEXT_POKEMON';
const PREVIOUS_POKEMON = 'PREVIOUS_POKEMON';

export const actionTypes = {
    NEXT_POKEMON,
    PREVIOUS_POKEMON
};

export const nextPokemon = () => {
    return {
        type: NEXT_POKEMON
    };
};

export const previousPokemon = () => {
    return {
        type: PREVIOUS_POKEMON
    };
};