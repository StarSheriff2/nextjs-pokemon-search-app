import { create } from 'zustand';
import createPokemonSlice from './slices/pokemonSlice';
import IPokemon from './types/IPokemon.type';

const useStore = create<IPokemon>()((...args) => ({
  ...createPokemonSlice(...args),
}));

export default useStore;
// import { devtools, persist } from 'zustand/middleware';

// interface PokemonState {
//   data: { name: string; no: number }[];
//   isLoading: boolean;
//   error: null | string;
// }

// interface Actions {
//   getPokemon: (limit: number) => void;
// }

// const usePokemonStore = create<PokemonState>()(
//   devtools(
//     persist(
//       (set) => ({
//         data: [{ name: 'squirtle', no: 1 }],
//         isLoading: false,
//         error: null,
//         getPokemon: async (limit: number) => {
//           try {
//             set({ isLoading: true });
//             const res = await { data: [{ name: 'squirtle', no: limit }] };
//             set({ isLoading: false, data: res.data });
//           } catch (error: any) {
//             set({ error: error.message, isLoading: false });
//           }
//         },
//         // try {
//         //   getPokemon: (by) => set((state) => ({ bears: state.bears + by })),

//         // } catch (error) {

//         // }
//       }),
//       {
//         name: 'pokemon-storage',
//       }
//     )
//   )
// );

// export default usePokemonStore;
