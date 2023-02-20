import useStore from '@/store/useStore';
import { useQuery } from '@tanstack/react-query';
import api from '../api/pokemon';
import Pokemon from './types';

const fetchPokemon = async () => {
  const { data } = await api.get<Pokemon>('/pokemon?limit=10');
  return data;
};

const useFetchPokemon = () => {
  const { setData } = useStore((state) => state);
  return useQuery(['pokemon'], fetchPokemon, {
    onSuccess: (data) => setData(data),
  });
};

export default useFetchPokemon;
