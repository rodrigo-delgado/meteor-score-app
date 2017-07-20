import React from 'react';
import ReactDOM from 'react-dom';

import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPosition} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {

    let players = Players.find({},{
        sort: {
          score: -1
        }
      }
    ).fetch();
    let positionedPlayers= calculatePlayerPosition(players);
    let title = 'Score Keep';
    let subtitle = 'Created by RGDV'

  ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>,
  document.getElementById('app'));
  });
});
