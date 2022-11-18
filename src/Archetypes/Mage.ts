import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

export default class Mage extends Archetypes {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage.numberOfInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.numberOfInstances;
  }
}
