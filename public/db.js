function saveRecord(trans) {
  const request = window.indexedDB.open("transactionDB", dbVersion);

  request.onupgradeneeded = ({ target }) => {
    const db = target.result;
    const objectStore = db.createObjectStore("transactionsList", { autoIncrement: true });
  }

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(["transactionsList"], "readwrite");
    const objectStore = transaction.objectStore("transactionsList");
    objectStore.add(trans);
  }
}
