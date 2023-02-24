import Pokemon from '@/lib/types';
import { StateCreator } from 'zustand';
import IPokemon from '../types/IPokemon.type';

const createPokemonSlice: StateCreator<IPokemon> = (set, get) => ({
  data: null,
  setData: (data: Pokemon) => set({ data }),
});

export default createPokemonSlice;
