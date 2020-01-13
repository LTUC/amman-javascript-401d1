'use strict';

const mongoose = require('mongoose');
const Players = require('./models/players-model');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

let players = new Players();

const doDataStuff = async () => {

  let sampleObject = {
    name: 'John',
    position: 'C',
    bats: 'L',
    throws: 'R',
    team: 'Mariners',
  };

  let newPlayer = await players.create(sampleObject);
  console.log('Player Created', newPlayer);


  let allPlayers = await players.get();
  console.log('All Players', allPlayers);

  let onePlayer = await players.get('5d12a3c0e27a289b9bd5eca4');
  console.log('One Player', onePlayer);

  // Disconnect from Mongo
  mongoose.disconnect();

};

doDataStuff();
