var ServerVap = require("express")
var ServerVaj = ServerVap()
ServerVaj.use(ServerVap.json())

var SdbCncVap = require("mysql")
var SdbCncVaj = SdbCncVap.createConnection({
    host: "localhost",
    user: "SdbUsr",
    password: "UsrPwd4Sdb",
    database: "NameSdb"
})

SdbCncVaj.connect((ErrSdbVar) =>
{
    if (ErrSdbVar) throw ErrSdbVar
    else console.log("Sdb Connected.")
})

ServerVaj.listen(8000, () =>
{
    console.log("Server started running...")
})


// var JoiVap = require("joi")
// var ValidatorVap = require("express-joi-validation").createValidator({

// })

// let UsrSchemaVar = JoiVap.object({
//     "NamVak": JoiVap.string().required(),
//     // "MobVak": JoiVap.string().length(10).regex(/^[6-9][0-9]{9}$/).required(),
//     // "MylVak": JoiVap.string().email({ minDomainAtoms: 2 }).required(),
//     // "PwdVak": JoiVap.string().regex(/^[a-zA-Z0-9]{8,20}$/).required()
// })

// // For getting the information
// ServerVaj.get("/", (req, res) =>
// {
//     res.send("<h1>Welcome to my Awesome website!</h1>")
// })

// ServerVaj.get("/contact", (req, res) =>
// {
//     res.send("<h1>You can contact me on 6361299541</h1>")
// })

// ServerVaj.get("/about", (req, res) =>
// {
//     res.send("<h1>I'm Thanuja from Mangalore</h1>")
// })

// ServerVaj.get("/user/:username/:bill", (req, res) =>
// {
//     var UsrNamVar = req.params.username
//     var BillVar = req.params.bill
//     res.send(`<h1>Hello ${UsrNamVar}... Nice meeting you. Please pay the ${BillVar}</h1>`)
// })

// // For add or creating the information
// ServerVaj.post("/info", (req, res) =>
// {
//     var UsrPwdVar = req.body.PwdVak
//     if (UsrPwdVar.length <= 8 || !UsrPwdVar.match(/[0-9]/g) || !UsrPwdVar.match(/[!@#$%^&*]/g))
//         res.send(`<h1>Invalid Password<h1>`)
//     else
//         res.send(`<h1>Your Password is ${UsrPwdVar}<h1>`)
// })

// //For updating entire information
// ServerVaj.put("/info:uid", (req, res) =>
// {
//     var UidVar = req.params.uid
//     var MobVar = req.body.MobVak
//     res.send(`<h1>${MobVar} has been updated for ID ${UidVar}</h1>`)
// })

// //For updating one information
// ServerVaj.patch("/info:uid", (req, res) =>
// {
//     var UidVar = req.params.uid
//     var MobVar = req.body.MobVak
//     res.send(`<h1>${MobVar} has been updated for ID ${UidVar}</h1>`)
// })

// //For deleting entire information
// ServerVaj.delete("/info:uid", (req, res) =>
// {
//     var UidVar = req.params.uid
//     res.send(`<h1>${MobVar} has been updated for ID ${UidVar}</h1>`)
// })

// ServerVaj.get("/resume", (req, res) =>
// {
//     res.sendFile("resume.html", { root: __dirname })
// })

// ServerVaj.get("/DownloadAdhar", (req, res) =>
// {
//     var FileVar = `${__dirname}/storage/Adhar.pdf`
//     res.download("resume.html", { root: __dirname })
// })


// // Wish CRUD operations
// var WishAryVar = ["Phone", "Cloths", "Watch", "Shoes", "Ear buds"]

// ServerVaj.get("/wish", (req, res) =>
// {
//     res.json(WishAryVar)
// })

// ServerVaj.get("/wish/:idx", (req, res) =>
// {
//     var IdxVar = req.params.idx
//     res.json(WishAryVar[IdxVar])
// })

// ServerVaj.post("/wish", (req, res) =>
// {
//     var WishVar = req.body.WishVak
//     var check = CheckValidation(WishVar, res)
//     if (check)
//         WishAryVar.push(WishVar)
//     res.json(WishAryVar)
// })

// ServerVaj.put("/wish/:idx", (req, res) =>
// {
//     var IdxVar = req.params.idx
//     var WishVar = req.body.WishVak
//     var check = CheckValidation(WishVar, res)
//     if (check)
//         WishAryVar[IdxVar] = WishVar
//     res.json(WishAryVar)
// })

// ServerVaj.delete("/wish/:idx", (req, res) =>
// {
//     var IdxVar = req.params.idx
//     WishAryVar.splice(IdxVar, 1)
//     res.json(WishAryVar)
// })

// var CheckValidation = (WishPsgVar, res) =>
// {
//     if (WishAryVar.includes(WishPsgVar))
//         res.send("<h1>Item already exists</h1>")
//     else if (WishPsgVar.trim() == "")
//         res.send("<h1>Item cant be empty</h1>")
//     else
//         return true
// }


// //CRUD operations on dream array
// var DreamAryVar = [
//     {
//         "Name": "Shadab",
//         "Plan": "Buy Mustang",
//         "Cost": 10000000,
//         "Year": "20 Jan 2032"
//     },
//     {
//         "Name": "Chethan",
//         "Plan": "Macbook Pro",
//         "Cost": 579000,
//         "Year": "27 Feb 2027"
//     },
//     {
//         "Name": "Thanuja",
//         "Plan": "Buy independent house",
//         "Cost": 20000000,
//         "Year": "01 Oct 2032"
//     },
//     {
//         "Name": "Karthik",
//         "Plan": "Buy Benz",
//         "Cost": 15000000,
//         "Year": "28 Feb 2030"
//     },
//     {
//         "Name": "Akash",
//         "Plan": "Sneakers collection",
//         "Cost": 200000,
//         "Year": "13 Nov 2025"
//     }
// ]

// ServerVaj.get("/dream", (req, res) =>
// {
//     res.json(DreamAryVar)
// })

// ServerVaj.get("/dream/:idx", (req, res) =>
// {
//     var IdxVar = req.params.idx
//     res.json(DreamAryVar[IdxVar])
// })

// ServerVaj.post("/dream", (req, res) =>
// {
//     var DreamVar = req.body.DreamVak
//     var check = CheckValidation(DreamVar, res)
//     if (check)
//         DreamAryVar.push(DreamVar)
//     res.json(DreamAryVar)
// })

// ServerVaj.put("/dream/:idx", (req, res) =>
// {
//     var IdxVar = req.params.idx
//     var DreamVar = req.body.DreamVak
//     var check = CheckValidation(DreamVar, res)
//     if (check)
//         DreamAryVar[IdxVar] = DreamVar
//     res.json(DreamAryVar)
// })

// ServerVaj.delete("/dream/:idx", (req, res) =>
// {
//     var IdxVar = req.params.idx
//     DreamAryVar.splice(IdxVar, 1)
//     res.json(DreamAryVar)
// })

// var CheckValidation = (DreamPsgVar, res) =>
// {
//     if (DreamAryVar.includes(DreamPsgVar))
//         res.send("<h1>Item already exists</h1>")
//     else if (DreamPsgVar.trim() == "")
//         res.send("<h1>Item cant be empty</h1>")
//     else
//         return true
// }


// ServerVaj.get("/user", (ReqNdsVar, ResNdsVar) =>
// {
//     var SqlQryVar = "SELECT UidCol,NamCol,MoblCol,MylCol FROM NamTbl "
//     SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
//     {
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//     })
// })

// ServerVaj.get("/user/:uid", (ReqNdsVar, ResNdsVar) =>
// {
//     var UidVar = ReqNdsVar.params.uid
//     var SqlQryVar = `SELECT UidCol,NamCol,MoblCol,MylCol FROM NamTbl WHERE UidCol = ${UidVar}`
//     SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
//     {
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar[0])
//     })
// })

// ServerVaj.post('/user', (ReqNdsVar, ResNdsVar) =>
//  {     
//     var UsrVar = ReqNdsVar.body
//     if(UsrVar.NamVak.trim() == "" || UsrVar.MobVak.trim()== "" || UsrVar.MylVak.trim() =="" )   
//         ResNdsVar.send("Please Give all Valid Input, It can't be Empty") 
//     else if(UsrVar.NamVak != UsrVar.NamVak.split(" ").map((ItmVar) => ItmVar.charAt(0).toUpperCase()+ItmVar.slice(1)).join(" ")|| !UsrVar.NamVak.match(/^[A-Za-z ]+$/g))
//         ResNdsVar.send("Invalid name")
//     else if (UsrVar.MobVak.length!=10 || !UsrVar.MobVak.match(/^[0-9]+$/g) || UsrVar.MobVak[0]<6 )
//         ResNdsVar.send("Enter a valid number")
//     else if(!UsrVar.MylVak.match(/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g))
//         ResNdsVar.send("Enter a valid email")
//     else
//     var SqlQryVar=`INSERT INTO NamTbl (NamCol,MoblCol,MylCol) VALUES ("${UsrVar.NamVak}","${UsrVar.MobVak}","${UsrVar.MylVak}")`
//     SdbCncVaj.query(SqlQryVar,(ErrSdbVar,ResSdbVar)=>{
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//       } )  
// })

// ServerVaj.post('/user',ValidatorVap.query(UsrSchemaVar), (ReqNdsVar, ResNdsVar) =>
//  {     
//     var UsrVar = ReqNdsVar.body
//     var SqlQryVar=`INSERT INTO NamTbl (NamCol,MoblCol,MylCol) VALUES ("${UsrVar.NamVak}","${UsrVar.MobVak}","${UsrVar.MylVak}")`
//     SdbCncVaj.query(SqlQryVar,(ErrSdbVar,ResSdbVar)=>{
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//       } )  
// })

// ServerVaj.put("/user/:uid", (ReqNdsVar, ResNdsVar) =>
// {
//     var UidVar = ReqNdsVar.params.uid
//     var UsrVar = ReqNdsVar.body
//     var SqlQryVar = `UPDATE NamTbl SET NamCol="${UsrVar.NamVak}",MoblCol="${UsrVar.MobVak}",MylCol="${UsrVar.MylVak}" WHERE UidCol=${UidVar}`
//     SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
//     {
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//     })
// })

// ServerVaj.patch("/user/:uid", (ReqNdsVar, ResNdsVar) =>
// {
//     var UidVar = ReqNdsVar.params.uid
//     var MylVar = ReqNdsVar.body
//     var SqlQryVar = `UPDATE NamTbl SET MylCol="${MylVar.MylVak}" WHERE UidCol=${UidVar}`
//     SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
//     {
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//     })
// })

// ServerVaj.delete("/user/:uid", (ReqNdsVar, ResNdsVar) =>
// {
//     var UidVar = ReqNdsVar.params.uid
//     var SqlQryVar = `DELETE FROM NamTbl WHERE UidCol=${UidVar}`
//     SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
//     {
//         if (ErrSdbVar) throw ErrSdbVar
//         ResNdsVar.json(ResSdbVar)
//     })
// })

// // ServerVaj.get("/user", (ReqNdsVar, ResNdsVar) =>
// // {
// //     var UsrVar = ReqNdsVar.body
// //     var SearchVar = "SELECT NamCol,MylCol FROM NamTbl"
// //     SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
// //     {
// //         if (ErrSdbVar) throw ErrSdbVar
// //     })
// //     if(!SearchVar.NamVak.includes(UsrVar.SearchVak) || !SearchVar.MylVak.includes(UsrVar.SearchVak))
// //         ResNdsVar.send("User doesnot exists")
// //     else
// //         var SqlQryVar = "SELECT UidCol,NamCol,MoblCol,MylCol FROM NamTbl"
// //         SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
// //         {
// //             if (ErrSdbVar) throw ErrSdbVar
// //             ResNdsVar.json(ResSdbVar)
// //         })
// // })

ServerVaj.post('/product', (ReqNdsVar, ResNdsVar) =>
{
    var PrdVar = ReqNdsVar.body
    var SqlQryVar = `INSERT INTO PrdTbl (TitleCol,DetCol,CostCol) VALUES ("${PrdVar.TitleVak}","${PrdVar.DetVak}","${PrdVar.CostVak}")`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
    {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

ServerVaj.post('/order', (ReqNdsVar, ResNdsVar) =>
{
    var OrdVar = ReqNdsVar.body
    var SqlQryVar = `INSERT INTO OrdTbl (UsrUidCol,PrdUidCol,QtyCol) VALUES ("${OrdVar.UsrUidVak}","${OrdVar.PrdUidVak}","${OrdVar.QtyVak}")`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
    {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})

ServerVaj.get('/order/:uid', (ReqNdsVar, ResNdsVar) =>
{
    var UidVar = ResNdsVar.params.uid
    var SqlQryVar = `SELECT * FROM ordtbl INNER JOIN namtbl ON ordtbl.UsrUidCol=namtbl.UidCol INNER JOIN prdtbl ON ordtbl.PrdUidCol=prdtbl.UidCol WHERE ordtbl.UidCol=${UidVar}`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
    {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar[0])
    })
})

ServerVaj.get('/order-count/:prduid', (ReqNdsVar, ResNdsVar) =>
{
    var PrdUidVar = ReqNdsVar.params.prduid
    var SqlQryVar = `SELECT COUNT(PrdUidCol) FROM ordtbl WHERE PrdUidCol=${PrdUidVar}`
    SdbCncVaj.query(SqlQryVar, (ErrSdbVar, ResSdbVar) =>
    {
        if (ErrSdbVar) throw ErrSdbVar
        ResNdsVar.json(ResSdbVar)
    })
})