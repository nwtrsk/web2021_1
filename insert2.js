const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
insert into member ("名前", "期生", "生年月日", "出身", "選抜数", "参加シングル数") values ("生駒里奈","1", "1995年12月29日", "秋田", "20", "20");
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
