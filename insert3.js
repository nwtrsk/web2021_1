const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
insert into single ("シングル名", "発売日", "初日売上", "初週売上", "センター") values ("ハルジオンが咲く頃", "2016年3月23日", "59.0万枚", "75.0万枚", 20);
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
