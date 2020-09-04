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
let readuser = async (input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "SELECT * FROM SIGNUP WHERE EMAIL=? AND PASSWORD=?"

    let results = await con.queryAsync(sql, [input.email, input.password]);

    console.log(results)
    await con.endAsync();



    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }

}
module.exports = { readuser }