import React from 'react';
import ReactDOM from 'react-dom';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value

    e.preventDefault();
    //Grab the value from the form and put it in playerName
    if (playerName) {
      //clean the form field
      e.target.playerName.value = '';

      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Your Name Here"/>
          <button>Add Player</button>
        </form>
      </div>
    )
  }
}
