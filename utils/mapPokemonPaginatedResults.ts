import { GenericItem, Result } from '@/lib/types';
import pokemonImgUrl from './generatePokemonImageUrl';

export const IMG_URL_KEY = 'imgUrl';
export const IMG_ALT_KEY = 'imgAlt';
export const LINK_PATH_KEY = 'linkPath';

const mapListResults = (fetchedResults: Result[]): GenericItem[] => {
  return fetchedResults.map((item) => ({
    ...item,
    name: `${item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}`,
    [IMG_URL_KEY]: pokemonImgUrl(item.name),
    [LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.name)}`,
    [IMG_ALT_KEY]: `${item.name} artwork`,
  }));
};

export default mapListResults;
