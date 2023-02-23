import Pokemon from '@/pages/hooks/types';

interface IPokemon {
  data: Pokemon | null;
  setData: (data: Pokemon) => void;
}

export default IPokemon;
