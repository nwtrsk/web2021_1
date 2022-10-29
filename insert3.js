const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
insert into single ("シングル名", "発売日", "初日売上", "初週売上", "センター") values ("インフルエンサー", "2017年3月22日", "74.3万枚", "87.4万枚", 16);
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
