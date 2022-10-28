const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
insert into single ("シングル名", "発売日", "初日売上", "初週売上", "センター") values ("君の名は希望", "2013年3月13日", "20.4万枚", "24.2万枚", 3);
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
