// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb')
const url = 'mongodb://localhost:27017/todos';

var user = {name:'Tej',age:25};


/*// Object De-Structuring ES-6
var {name} = user;
console.log(name);

var obj = new ObjectId();
console.log(obj);
*/


MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

    // console.log('db',db);

    db.collection('todos').insertOne({
        text: 'Walk to dog',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        // console.log(result.ops);
        // console.log(JSON.stringify(result.ops));
        console.log(JSON.stringify(result.ops,undefined,2));
       
    });

    // db.collection('users').insertOne({
    // 	name:"Jarvis",
    // 	age:25
    // },(err,result) => {

    // 	if(err){
    // 		return console.log('Unable to insert user');
    // 	}

    // 	// console.log(JSON.stringify(result.ops,undefined,2));
    // 	console.log(result.ops[0]._id);
    // 	console.log(result.ops[0]._id.getTimestamp());
    // })

	
    db.close();
});