import POKEMON_IMAGES_URL from '@/constants/pokemonImageUrl';

const pokemonImgUrl = (name: string) => `${POKEMON_IMAGES_URL}/${name}.jpg`;

export default pokemonImgUrl;
