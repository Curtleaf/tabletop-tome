import { MongoClient, ServerApiVersion } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || 
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;
const dbName = process.env.MONGODB_DATABASE_NAME;

let cachedClient: MongoClient | null = null;
let cachedDb: any | null = null; // Using 'any' temporarily, replace with your Db type if possible

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return cachedDb; // Return cached instances if available
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect(); 
    const db = client.db(dbName);

    cachedClient = client; 
    cachedDb = db;

    return db; 
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; 
  }
}
