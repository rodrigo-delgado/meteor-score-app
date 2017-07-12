import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

//Import Components Here
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let subtitle = 'Created by RGDV'
    let jsx = (
      
      <div>
        <TitleBar title={title} subtitle={subtitle}/>
        <AddPlayer />
        <PlayerList players={players}/>
      </div>
      );

      ReactDOM.render(jsx, document.getElementById('app'));
  });

});
