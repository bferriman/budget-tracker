const dbVersion = 1;  //version number of indexedDB for offline transactions

let db;
const request = window.indexedDB.open("transactionDB", dbVersion);

request.onupgradeneeded = ({ target }) => {
  const db = target.result;
  const objectStore = db.createObjectStore("transactionsList", { autoIncrement: true });
};

request.onsuccess = ({ target }) => {
  db = target.result;

  if(navigator.onLine) {
    checkDatabase();
  }
};

function saveRecord(trans) {
  const transaction = db.transaction(["transactionsList"], "readwrite");
  const store = transaction.objectStore("transactionsList");
  store.add(trans);
}

function checkDatabase() {
  const transaction = db.transaction(["transactionsList"], "readwrite");
  const store = transaction.objectStore("transactionsList");
  const getAll = store.getAll();

  getAll.onsuccess = () => {
    if(getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
        const transaction = db.transaction(["transactionsList"], "readwrite");
        const store = transaction.objectStore("transactionsList");
        store.clear();
      });
    }
  };
}

window.addEventListener("online", checkDatabase);