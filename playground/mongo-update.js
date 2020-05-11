// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017/todos';


MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('todos').findOneAndUpdate({
    //     _id: new ObjectId("5eb7e06810047b7db05aedc5")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectId("5eb7e06810047b7db05aedc9")
    }, {
        $set: {
            name : "Tej"
        },
        $inc:{
            age : -1
        }
    },{
        returnOriginal : false,
        upsert : true
    }).then((result) =>{
        console.log(result);
    },(error) =>{
        console.log('Unable to update',error);
    });
    // db.close();
});