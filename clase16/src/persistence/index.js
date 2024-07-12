import * as ExpoSQLite from 'expo-sqlite'

const db = ExpoSQLite.openDatabase('sessions.db');

// crear la tabla
export const initSQLiteDB = () => {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=> {
            tx.executeSql(
              "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);",
              [], // Parametros
              (_, result) => resolve(result),
              (_, error) => reject(error)
            );
        });
    });
    console.log("retorna la promesa")
    return promise
}
// crear la session
export const insertSession = ({email, localId, token})=>{
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO sessions (localId, email, token) VALUES (?,?,?)",
          [localId, email, token], // Parametros
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
    console.log("Insertando registro promesa");
    return promise;
}


// obtener la session
export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * from sessions",
          [], // Parametros
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
    console.log("Obteniendo la session");
    return promise;
}

// Eliminar la session
export const truncateSessionTable = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "DELETE from sessions",
          [], // Parametros
          (_, result) => resolve(result),
          (_, error) => reject(error)
        );
      });
    });
    console.log("Borrando la session");
    return promise;
}
