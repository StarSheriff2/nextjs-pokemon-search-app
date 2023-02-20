export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
}

export default Pokemon;
