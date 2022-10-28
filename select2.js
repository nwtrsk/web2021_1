const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
select id, "シングル名", "発売日", "初日売上", "初週売上", "センター" from single order by "初週売上" desc;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.シングル名 + ' : ' + data.発売日 + ' : ' + data.初日売上 + ' : ' + data.初週売上 + ' : ' + data.センター );
    }
  });
});
