const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('beer.db');

db.run("CREATE TABLE BEER (NAME TEXT, TYPE TEXT, RATING NUMBER)");
db.close();