import * as ExpoSQLite from "expo-sqlite";

const db = ExpoSQLite.openDatabase("sessions.db");

export const initSQLiteDB = () => {
  console.log("Will create table");
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //Define SQL statement. BEWARE of PARENTHESIS
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);",
        [], //Parameters
        (_, result) => resolve(result), //Resolve trasaction
        (_, error) => reject(error) //Transaction error
      );
    });
  });
  console.log("will return promise");
  return promise;
};

export const insertSession = ({ email, localId, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //Define SQL statement. BEWARE of PARENTHESIS
      tx.executeSql(
        "INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);",
        [localId, email, token], //Parameters
        (_, result) => resolve(result), //Resolve trasaction
        (_, error) => reject(error) //Transaction error
      );
    });
  });
  return promise;
};

export const getSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //Define SQL statement. BEWARE of PARENTHESIS
      tx.executeSql(
        "SELECT * from sessions",
        [], //Parameters
        (_, result) => resolve(result), //Resolve trasaction
        (_, error) => reject(error) //Transaction error
      );
    });
  });
  return promise;
};

export const dropSessionsTable = () => {
  console.log("Will drop table");
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //Define SQL statement. BEWARE of PARENTHESIS
      tx.executeSql(
        "DROP TABLE IF EXISTS sessions",
        (_, result) => resolve(result), //Resolve trasaction
        (_, error) => reject(error) //Transaction error
      );
    });
  });
  console.log("will return promise");
  return promise;
};

export const truncateSessionsTable = () => {
  console.log("Will truncate table");
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //Define SQL statement. BEWARE of PARENTHESIS
      tx.executeSql(
        "DELETE FROM sessions",
        [], //Parameters
        (_, result) => resolve(result), //Resolve trasaction
        (_, error) => reject(error) //Transaction error
      );
    });
  });
  console.log("will return promise");
  return promise;
};
