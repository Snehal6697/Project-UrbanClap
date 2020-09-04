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
let updateuser = async (input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "UPDATE SIGNUP SET PASSWORD=? WHERE EMAIL=?"

    let results = await con.queryAsync(sql, [input.password, input.email]);

    console.log(results)
    await con.endAsync();
    return results;


}
module.exports = { updateuser }