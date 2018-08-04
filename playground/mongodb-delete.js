const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //deleteOne (only the first one)
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteOne({
  //   _id: new ObjectID('5b6440b94c80f02576e8a322')
  // }).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').deleteMany({
  //   name: 'Rishabh'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});