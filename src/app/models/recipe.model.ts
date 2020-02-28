export interface Ingredients {
  name: string;
  unit: string; // TODO: enum, probably
  amount: number;
}

export interface Recipe {
  readonly _id: number;
  name: string;
  recipieCreator: string;
  ingredients: Ingredients[];
  image: [ // image id probably no need ???
    { id: string; title: string, description: string, file: string, dataSource: string }
  ];
}
