import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Method to add content to the database
export const putDb = async (content) => {
  console.log("PUT to the database");

  // Open the database
  const db = await openDB("jate", 1);

  // Start a new transaction and specify the database and data privileges
  const tx = db.transaction("jate", "readwrite");

  // Open the object store
  const store = tx.objectStore("jate");

  // Add the content to the store
  const request = store.put({ content: content });

  // Get confirmation of the request
  const result = await request;
  console.log("Data saved to the database", result);
};

// Method to get all content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Open the database
  const db = await openDB("jate", 1);

  // Start a new transaction and specify the database and data privileges
  const tx = db.transaction("jate", "readonly");

  // Open the object store
  const store = tx.objectStore("jate");

  // Get all data in the store
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log("Data retrieved from the database", result);
  return result;
};

initdb();
