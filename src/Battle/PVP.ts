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

  fight(): number {
    let result = 0;

    this._playerOne.attack(this._playerTwo);
    if (this._playerTwo.lifePoints === -1) result = 1;

    this._playerTwo.attack(this._playerOne);
    if (this._playerOne.lifePoints === -1) result = -1;

    return result;
  }
}