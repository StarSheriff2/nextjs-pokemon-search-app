import Pokemon from '@/pages/hooks/types';

interface IPokemon {
  data: Pokemon | null;
  setData: (data: Pokemon) => void;
  // isLoading: boolean;
  // error: null | string;
  // getPokemon: (limit: number) => void;
}

export default IPokemon;
