import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  public fight(): number {
    if (this._playerOne.lifePoints < 1) return -1;

    this._playerOne.attack(this._playerTwo);
    if (this._playerTwo.lifePoints < 1) return 1;

    this._playerTwo.attack(this.player);
    if (this.player.lifePoints !== -1 || this._playerTwo.lifePoints !== -1) {
      return this.fight();
    }
    return super.fight();
  }
}