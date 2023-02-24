import Pokemon from '@/lib/types';

interface IPokemon {
  data: Pokemon | null;
  setData: (data: Pokemon) => void;
}

export default IPokemon;
