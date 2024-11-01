  import { Document } from 'mongoose';
  import { SystemConfiguration } from './system';

  export interface CharacterDataObject<T> {
    id: number;
    name: string;
    primaryValue: T;
    secondaryValues: {
      name: string;
      value: T;
    }[];
    description: string;
  }
  

  export interface CharacterDocument extends Document {
    id: number;
    name: string;
    gameSystem: string;
    data: CharacterDataObject<any>[]; // Array to hold all character data
    systemConfiguration: SystemConfiguration; // Configuration for the game system
  }
  