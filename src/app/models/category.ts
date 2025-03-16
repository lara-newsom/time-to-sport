export enum Category {
  BALLS = 'balls',
  UNDERWATER = 'underwater-sports',
  TROPHIES = 'trophies',
  HORSE_SPORTS = 'sports-with-horses',
  SHOOTING_THINGS = 'shooting-things',
  COSTUMES = 'costumes',
  SPEED = 'speed',
  HITTING_THINGS = 'hitting-things',
  EQUIPMENT = 'equipment',
  SPECTATORS = 'spectators',
  ALL = 'all'
}

export interface CategoryLink {
  category: Category;
  description: string;
  firstProduct?: string;
}

export const LINKS: CategoryLink[] = [
  {
    category: Category.BALLS,
    description: 'Balls for sports',
    firstProduct: 'bird-in-straw-hat'
  },
  {
    category: Category.UNDERWATER,
    description: 'Sports where you go in water',
    firstProduct: 'cat-glasses-1'
  },
  {
    category: Category.HORSE_SPORTS,
    description: 'Sports with horses',
    firstProduct: 'banana-puppy'
  },
  {
    category: Category.SHOOTING_THINGS,
    description: 'Sports where you shoot things',
    firstProduct: 'bowtie-dog'
  },
  {
    category: Category.SPECTATORS,
    description: 'Sport spectators',
    firstProduct: 'ACC011'
  },
  {
    category: Category.COSTUMES,
    description: 'Sports costumes',
    firstProduct: 'ACC002'
  },
  {
    category: Category.HITTING_THINGS,
    description: 'Hitting things',
    firstProduct: 'ACC001'
  },
  {
    category: Category.SPEED,
    description: 'Go fast sports',
    firstProduct: 'ACC026'
  },
  {
    category: Category.TROPHIES,
    description: 'Sport awards',
    firstProduct: 'ACC016'
  },
  {
    category: Category.EQUIPMENT,
    description: 'Stuff you need for sports',
    firstProduct: 'ACC016'
  },
  {
    category: Category.ALL,
    description: 'Everything for sports',
    firstProduct: 'banana-puppy'
  },
]
