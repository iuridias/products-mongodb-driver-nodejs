const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/projetonode'

const client = new MongoClient(uri);

async function run () {
  try{
    await client.connect()
    console.log('Conectado ao mongo.')
  } catch (error) {
    console.log(error);
  }
}

run();

module.exports = client;