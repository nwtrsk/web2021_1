const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
select * from member;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.名前 + ' : ' + data.期生 + ' : ' + data.出身 + ' : ' + data.生年月日 + ' : ' + data.選抜数 + ' : ' + data.参加シングル数 + ' : ' + data.卒業);
    }
  });
});
