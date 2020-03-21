import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('places.db')
const createSqlQuery = 'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL ,title TEXT NOT NULL,imageUri TEXT NOT NULL,address TEXT NOT NULL,lat REAL NOT NULL,lng REAL NOT NULL)'

export const initDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                createSqlQuery,
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

export const insertPlace = (title, imageUri, address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO places (title,imageUri,address,lat,lng) VALUES (?,?,?,?,?)',
                [title, imageUri, address, lat, lng],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}
