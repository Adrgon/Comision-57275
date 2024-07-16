import * as SQLite from 'expo-sqlite';

export const useDB = () => {
    const db = SQLite.openDatabaseSync("sessions.db");

    const initDB = () => {
        // creacion de la tabla
        const sql = `CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);`;
        db.execSync(sql);
    }

    const insertSession = ({email, localId, token}) => {
        // crear la session 
        const sql = `INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);`;
        const args = [localId, email, token];
        return db.runSync(sql, args)
    }

    const getSession = () => {
        // obtener la session
        const sql = `SELECT * FROM sessions;`;
        const firstRow = db.getFirstSync(sql);
        console.log(firstRow)
        return firstRow
    }

    const truncateSessionTable = () => {
        // borrar la session
        const sql = `DELETE FROM sessions`
        return db.execSync(sql)
    }
    
    return {
        initDB,
        insertSession,
        getSession,
        truncateSessionTable
    }
}
