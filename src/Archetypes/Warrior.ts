import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Warrior extends Archetypes {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.numberOfInstances += 1;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return Warrior.numberOfInstances;
  }
}