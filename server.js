const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
const { Pool, Client } = require('pg')

app.use([cors({
  origin : [ 'http://localhost:3500' , 'http://localhost:3000' ],
  methods:["GET" , "POST" , "PUT", "DELETE"],
  credentials: true
}), express.json()]);

fakeLogin = [
  {user: "123", pwd:"xxx"},
  {user: "456", pwd:"xxx"},
]

const poolSetting = {
  user: 'postgres',
  host: 'localhost',
  database: 'testdbxxx',
  password: 'postgres',
  port: 5432,
};


app.use('/login', (req, res) => {
  console.log(req.body);
  const isFound = fakeLogin.some(item => {
    if (item.user === req.body.user && item.pwd === req.body.pwd) {
      return true;
    }
  
    return false;
  });
  if (isFound){
    crypto.randomBytes(48, function(err, buffer) {
      const token = buffer.toString('hex');
      res.send({
        token: token,
        roles: 'user',
      });
    });
  } else
    res.send({
      token: null,
      roles: 'user',
    });
});

let res;
app.get('/loadDbSeats', (req, res) => {
  const queryDb = async () => {
    try {
      const pool = new Pool(poolSetting)
      await pool.connect();
      rslt = await pool.query('SELECT * FROM  book_a_seat.seat_objs');
      pool.end()
      res.send(rslt.rows);
    } catch (error) {
        console.log(error)
    }
  }
  queryDb();
});

app.post('/saveDBSeats', (req, res) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  // console.log("req.body", req.body);

  const connectDb = async () => {
    try {
      const pool = new Pool(poolSetting)
      pool.connect();      
      
      pool.query(`DELETE FROM book_a_seat.seat_objs`);

      await req.body.forEach((seat)=>{
        // console.log(`INSERT INTO book_a_seat.seat_objs (id, name, x, y)  
        // VALUES (${seat.id}, '${seat.name}', ${seat.x}, ${seat.y})`);
        pool.query(
          `INSERT INTO book_a_seat.seat_objs (id, name, x, y)  
          VALUES (${seat.id}, '${seat.name}', ${seat.x}, ${seat.y})`);
      });
      pool.end()
    } catch (error) {
        console.log(error)
    }
  }
  connectDb();

  res.send({successful: true});
});

app.listen(3500, () => console.log('API is running on http://localhost:3500'));



