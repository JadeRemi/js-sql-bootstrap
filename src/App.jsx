import React from "react";
import InitSqlJs from "sql.js";


export function App () {

    async function retr() {
        const SQL = await InitSqlJs({
            locateFile: file => `https://sql.js.org/dist/${file}`
        });
        const db = new SQL.Database;
        return db;
    }

    retr().then(db => console.log('DB up!: ', db))

    

    return (
        <div />
    )
}
