// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017/todos';


MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('todos').find({completed:true}).toArray().then((docs) =>{
/*
    db.collection('todos').find({

        _id: ObjectId("5eb7e06810047b7db05aedc5")

    }).toArray().then((docs) => {

        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find records', err);
    });

    db.collection('todos').find().count().then((count) => {
        console.log('Todos Count:', count);
    }, (err) => {
        console.log('Unable to count todos', err);
    });
*/

	db.collection('users').find({name:"Jarvis"}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs, undefined, 2))
	},(err) =>{
		console.log('Unable to find users',err);
	});



    // db.close();
});