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
let conuser = async (input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "INSERT INTO booking(name,email,mobile,location,service)VALUES(?,?,?,?,?)"

    await con.queryAsync(sql, [input.name, input.email, input.mobile, input.location, input.service]);

    await con.endAsync();
}

module.exports = { conuser }