// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017/todos';


MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

   
    // DeleteOne


    /*db.collection('todos').deleteOne({title:"Eat Lunch"}).then((result) =>{
		console.log(result);
        console.log(result.result);
	});*/

    // DeleteMany

    /*db.collection('todos').deleteMany({title:"Eat Lunch"}).then((result) =>{
        console.log(result);
        console.log(result.result);
    });
*/
    // FindOneAndDelete

    db.collection('todos').findOneAndDelete({title:"Eat Lunch"}).then((result) =>{
        console.log(result);
    });



    // db.close();
});