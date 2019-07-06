var config = require("./config");
var core = require("./core");
var sqlite3 = require("sqlite3").verbose();
var logger = core.createLogger();

var self = (module.exports = {
  mountGet: function (req, res) {
    let db = new sqlite3.Database('beer.db');
    if(req.body.Name==undefined)
    {
      db.all("SELECT * FROM BEER", [], (err, rows) => {
        if (err) {
          throw err;
        }
  
        res.send(rows);
      });  
    }else{
    db.all("SELECT * FROM BEER WHERE NAME LIKE ?", [req.body.Name], (err, rows) => {
      if (err) {
        throw err;
      }

      res.send(rows);
    });
  }
  },
  mountPut: function (req, res) {
    let db = new sqlite3.Database('beer.db');
    db.run("INSERT INTO BEER (NAME, TYPE, RATING) VALUES (?, ?, ?)", [req.body.Name, req.body.Type, req.body.Rating], (err) => {
      if (err) {
        throw err;
      }

      res.send(this.lastID);
    });
  },
  mountPost: function (req, res) {
    let db = new sqlite3.Database('beer.db');
    db.run("UPDATE BEER SET RATING= (RATING + ?)/2 WHERE NAME = ?", [req.body.Rating,req.body.Name], (err) => {
      if (err) {
        throw err;
      }

      res.send(this.changes);
    });
  },
  mountDelete: function (req, res) {
    let db = new sqlite3.Database('beer.db');
    db.run("DELETE FROM BEER WHERE NAME = ?", [req.body.Name], (err) => {
      if (err) {
        throw err;
      }

      res.send(this.changes);
    });
  }
});
