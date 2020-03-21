import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('places.db')
const sqlQuery = 'CREATE TABLE IF NOT EXISTS places (id PRIMARY KEY NOT NULL,title TEXT NOT NULL,imageUri TEXT NOT NULL,address TEXT NOT NULL,lat REAL NOT NULL,lng REAL NOT NULL)'

export const initDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                sqlQuery,
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}