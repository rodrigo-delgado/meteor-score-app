import {Mongo} from 'meteor/mongo';


//This create a Mongo collection and also a mini mongo collection
export const Players = new Mongo.Collection('players');
