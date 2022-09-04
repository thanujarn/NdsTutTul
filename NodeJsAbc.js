//console.log("I'm NodeJs app")

var ModuleVar = require("./name-module")

// console.log(ModuleVar.NamVak)
// console.log(ModuleVar.MobVak)
// console.log(ModuleVar.EmailVak)
// console.log(ModuleVar.AddVak)

// console.log(ModuleVar.NamVak, ModuleVar.MobVak, ModuleVar.EmailVak, ModuleVar.AddVak)

// console.log(ModuleVar)

//ModuleVar.NamVaf()

//console.log(ModuleVar.CubeVaf(3))

// console.log(ModuleVar.NamVak)
// ModuleVar.NamVaf()

// var ThanujaVar = ModuleVar.UserVak
// ThanujaVar.EmpId = "750331"
// ThanujaVar.Desg = "Trainee"

// var PrakashVar = ModuleVar.UserVak
// PrakashVar.EmpId = "750332"
// PrakashVar.Desg = "Developer"

// var ThanujaVar = ModuleVar.UserVaf()
// ThanujaVar.EmpId = "750331"
// ThanujaVar.Desg = "Trainee"

// var PrakashVar = ModuleVar.UserVaf()
// PrakashVar.EmpId = "750332"
// PrakashVar.Desg = "Developer"

// console.log(ThanujaVar)
// console.log(PrakashVar)

// var InfoVar = require("./info.json")

// console.log(InfoVar)
// console.log(InfoVar.Name)

ModuleVar.MultitaskVaf(1)
ModuleVar.MultitaskVaf(2)
ModuleVar.MultitaskVaf(3)
ModuleVar.MultitaskVaf(4)
ModuleVar.MultitaskVaf(5)


//name-module.js

// var NamVar = "Thanu"
// var MobVar = "6361299541"

// // module.exports.NamVak = NamVar
// // module.exports.MobVaK = MobVar

// module.exports = {
//     NamVak: NamVar,
//     MobVak: MobVar,
//     EmailVak: "thanuja@everi.com",
//     AddVak: "Mangaladevi, Mangalore"
// }

// function NamFnc()
// {
//     console.log("I'm a function")
// }

// function CubeFnc(NumPsgVar)
// {
//     return NumPsgVar ** 3
// }

// module.exports = {
//     NamVaf: NamFnc,
//     CubeVaf: CubeFnc
// }

// module.exports = {
//     NamVak: "Thanuja",
//     NamVaf: function ()
//     {
//         console.log("I'm exportable function")
//     },
//     UserVak: {
//         EmpId: " ",
//         Desg: " ",
//     },
//     UserVaf: function ()
//     {
//         return {
//             EmpId: " ",
//             Desg: " "
//         }
//     }
// }

module.exports.MultitaskVaf = function (req)
{
    console.log("Customer request number", req)
    setTimeout(() =>
    {
        console.log("Order devivered", req)
    }, 4000)
}
