import { MongoClient } from "mongodb";

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(
    // "mongodb+srv://furkanuzun:mongo8563M@cluster0.thdascn.mongodb.net/",
    "mongodb://root:Syi8563F@194.163.145.89:55000/"
  );

  client.on("error", console.error.bind(console, "connection error: "));
  client.once("open", function () {
    console.log("--connected to db--");
  });

  const db = client.db("petrov");

  cachedClient = {
    client,
    db,
  };

  return cachedClient;
}

export default connectToDatabase;
