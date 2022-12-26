const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
update member set 卒業 = 2 where id = 44;
`

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを更新しました" );
	});
});
