import Pokemon from '@/pages/hooks/types';
import { StateCreator } from 'zustand';
import IPokemon from '../types/IPokemon.type';

const createPokemonSlice: StateCreator<IPokemon> = (set, get) => ({
  data: null,
  setData: (data: Pokemon) => set({ data }),
  // isLoading: false,
  // error: null,
  // getPokemon: (limit: number) => {
  //   set({ isLoading: true });
  //   if (isError) {
  //     set({ error: (error as any).message, isLoading: false });
  //   } else {
  //     set({ isLoading: false, data });
  //   }
  // },
});

export default createPokemonSlice;

// useQuery(key, queryFn, { onSuccess: (data) => setToZustand(data) });
