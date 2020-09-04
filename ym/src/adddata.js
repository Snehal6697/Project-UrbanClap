const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);



const datacon = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'server'
}
let adduser = async (input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "INSERT INTO signup(name,email,password)VALUES(?,?,?)"

    await con.queryAsync(sql, [input.name, input.email, input.password]);

    await con.endAsync();
}

module.exports = { adduser }


