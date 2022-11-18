import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Ranger extends Archetypes {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.numberOfInstances += 1;
  }

  public get energyType() : EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return Ranger.numberOfInstances;
  }
}