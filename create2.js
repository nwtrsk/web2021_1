const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');


let schema = `
create table single(
  id integer primary key,
  シングル名 text not null,
  発売日 text not null,
  初日売上 text not null,
  初週売上 text not null,
  センター integer not null
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
