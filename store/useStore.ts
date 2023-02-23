import { create } from 'zustand';
import createPokemonSlice from './slices/pokemonSlice';
import IPokemon from './types/IPokemon.type';

const useStore = create<IPokemon>()((...args) => ({
  ...createPokemonSlice(...args),
}));

export default useStore;
