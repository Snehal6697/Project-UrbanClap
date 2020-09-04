const express = require("express");
const app = express();
app.use(express.json());

const add = require("./adddata")
const con = require("./conuser")
const read = require("./login_readdata")
const upd = require("./forget_updatedata")

const cors = require("cors");
app.use(cors());


// app.get("/adduser", async (req, res) => {


//     try {
//         const input = req.query;
//         await add.adduser(input);

//         res.json({
//             message: " success"
//         });

//     } catch (err) {

//         res.json({
//             message: " FAILURE"

//         });
//     }

// });
app.get("/", (req, res) => {


    try {
        res.send("hello world");

    } catch (err) {

        res.json({
            message: " FAILURE"

        });
    }

});
// app.get("/updatedata", async (req, res) => {


//     try {
//         const input = req.query;
//         await upd.updateuser(input);

//         res.json({
//             message: " success"

//         });

//     } catch (err) {

//         res.json({
//             message: " FAILURE"

//         });
//     }

// });

app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;
        console.log(input)
        let result = await add.adduser(input);

        console.log(result)

        res.json({
            message: "success"
        })
    } catch (err) {
        res.json({
            message: "Failure"
        })
    }
})
app.post("/conuser", async (req, res) => {
    try {
        const input = req.body;
        console.log(input)
        let result = await con.conuser(input);

        console.log(result)

        res.json({
            message: "success"
        })
    } catch (err) {
        res.json({
            message: "Failure"
        })
    }
})

app.post("/auth", async (req, res) => {
    try {
        const input = req.body;
        console.log(input)
        let result = await read.readuser(input);

        console.log(result)

        res.json({
            opr: true
        })
    } catch (err) {
        res.json({
            opr: false
        })
    }
})

app.post("/updatedata", async (req, res) => {


    try {
        const input = req.body;
        let result = await upd.updateuser(input);
        console.log(result)

        res.json({
            message: " success"

        });

    } catch (err) {

        res.json({
            message: " FAILURE"

        });
    }

});



app.listen(3200);