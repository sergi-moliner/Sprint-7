export interface Starship {
  name: string;
  model: string;
}

export interface StarshipResults {
  count: number;
  next: string;
  previous?: string;
  results: Starship[];
}
