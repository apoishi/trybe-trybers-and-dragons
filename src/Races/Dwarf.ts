import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.numberOfInstances += 1;
  }

  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.numberOfInstances;
  }
}