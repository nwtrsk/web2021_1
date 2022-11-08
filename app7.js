const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json())
app.use(express.urlencoded({extend: true}));

app.get("/", (req, res) => {
  const message = "こんにちは乃木坂46です";
  res.render('show2', {mes:message});
});

app.get("/single", (req, res) => {
    db.serialize( () => {
        db.all("select single.id, シングル名, 発売日, 初日売上, 初週売上, センター from single;", (error, row) => {
            if( error ) {
                res.render('show2', {mes:"エラーです"});
            }
            res.render('single', {data:row});
        })
    })
})

app.get("/member", (req, res) => {
    db.serialize( () => {
        db.all("select id,名前,期生,生年月日,出身,選抜数,参加シングル数 from member;", (error, row) => {
            if( error ) {
                res.render('show2', {mes:"エラーです"});
            }
            res.render('member', {data:row});
        })
    })
})

app.get("/top", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, シングル名, センター from single order by 初週売上" + desc + " limit " + req.query.pop + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('show2', {mes:"エラーです"});
            }
            //console.log(data);    // ③
            res.render('single', {data:data});
        })
    })
})

app.get("/db/:id", (req,res) =>{
  db.serialize( () => {
    db.all("select id,名前,期生,生年月日,出身,選抜数,参加シングル数 from member where id =" + req.params.id + ";",(error,row) => {
      if(error){
        res.render('show2',{mes:"エラーです"});
      }
      res.render('db',{data:row});
    })
  })
})

app.post("/single",(req,res) => {
  let sql = 'insert into single(シングル名,発売日,初日売上,初週売上,センター)values("'+ req.body.name +'","'+ req.body.date +'","'+ req.body.datear +'","'+ req.body.weekear +'",'+ req.body.center +');'
  console.log(sql);
  db.serialize(() => {
    db.run(sql,(error,row) =>{
      console.log(error);
      if(error){
        res.render('show2',{mes:"エラーです"});
      }
      res.render('show2',{mes:"成功です"});
    });
  });
  console.log(req.body);
});

app.post("/member",(req,res) => {
  let sql = 'insert into member(名前,期生,生年月日,出身,選抜数,参加シングル数)values("'+ req.body.name +'",' + req.body.period +',"'+ req.body.birth +'","'+ req.body.from +'",'+ req.body.selnum +','+ req.body.parnum +');'
  console.log(sql);
  db.serialize(() => {
    db.run(sql,(error,row) =>{
      console.log(error);
      if(error){
        res.render('show2',{mes:"エラーです"});
      }
      res.render('show2',{mes:"成功です"});
    });
  });
  console.log(req.body);
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});