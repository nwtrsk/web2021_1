const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
insert into member ("名前", "期生", "生年月日", "出身", "選抜数", "参加シングル数") values ("高山一実","1", "1994年2月8日", "千葉", "28", "28");
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
