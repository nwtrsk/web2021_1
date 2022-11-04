const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
insert into single ("シングル名", "発売日", "初日売上", "初週売上", "センター") values ("逃げ水", "2017年8月9日", "71.6万枚", "88.0万枚", 39);
`

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
