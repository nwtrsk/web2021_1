const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = [
  'insert into  member("name") values("生駒里奈");',
  'insert into  member("name") values("白石麻衣");',
  'insert into  member("name") values("堀未央奈");',
  'insert into  member("name") values("西野七瀬");',
  'insert into  member("name") values("生田絵梨花");',
  'insert into  member("name") values("深川麻衣");',
  'insert into  member("name") values("橋本奈々未");',
  'insert into  member("name") values("齋藤飛鳥");',
  'insert into  member("name") values("大園桃子");',
  'insert into  member("name") values("遠藤さくら");',
  'insert into  member("name") values("山下美月");',
  'insert into  member("name") values("賀来遥香");',
]


for( let sql of sqls){
  db.serialize( () => {
    db.run( sql, (error, row) => {
      if(error) {
			  console.log('Error: ', error );
			  return;
		  }
		  console.log( "データを追加しました" );
  	});
  });
}