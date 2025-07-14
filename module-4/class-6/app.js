const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://Database:<password>@cluster0.51l7ww2.mongodb.net/'

const client = new MongoClient(url)

const dbName = 'MongoDB'


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('firstClass');

  // the following code examples can be pasted here...

  const data = {
    name: 'Ali Aftab',
    role: 'Teacher',
    insitute: "Smit"
  }

// TO ADD DATA

// const insertResult = await collection.insertOne(data);
// console.log('Inserted documents =>', insertResult);

// TO GET DATA

const findResult = await collection.find({role: 'Student'}).toArray();
console.log('Found documents =>', findResult);

const updateResult = await collection.updateOne({ name: 'Ali Aftab' }, { $set: { name: 'Ali' } });
console.log('Updated documents =>', updateResult);

const { ObjectId } = require('mongodb');
const deleteResult = await collection.deleteMany({ _id: new ObjectId('687508712b070084ce57847f') });
console.log('deleteResult  =>', deleteResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

