import { hero_types } from '../enum/types'

export interface Hero {
  id: number;
  name: string;
  type: hero_types
}
