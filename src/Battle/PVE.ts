// import Fighter, { SimpleFighter } from '../Fighter';
// import Battle from './Battle';

// export default class PVE extends Battle {
//   private _player: Fighter;
//   private _monsters: SimpleFighter[];

//   constructor(player: Fighter, monsters: SimpleFighter[]) {
//     super(player);
//     this._player = player;
//     this._monsters = monsters;
//   }

//   fight(): number {
//     let result = 0;

//     this._monsters.map((monster) => {
//       monster.attack(this._player);
//       if (this._player.lifePoints === -1) result = -1;

//       return result;
//     });

//     this._monsters.map((monster) => {
//       this._player.attack(monster);
//       if (this._monsters.every(() =>
//         monster.lifePoints === -1)) result = 1;

//       return result;
//     });

//     return result;
//   }
// }

import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  public fight(): number {
    if (this.player.lifePoints < 0) return -1;

    this._monsters.forEach((monster) => {
      if (this.player.lifePoints < 0) return;
      this.player.attack(monster);
      if (monster.lifePoints < 0) return;
      monster.attack(this.player);
    });

    return super.fight();
  }
}

export default PVE;