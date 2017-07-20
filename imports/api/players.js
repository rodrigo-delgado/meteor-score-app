import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';


//This create a Mongo collection and also a mini mongo collection
export const Players = new Mongo.Collection('players');

export const calculatePlayerPosition = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if(index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    };
  });
};
