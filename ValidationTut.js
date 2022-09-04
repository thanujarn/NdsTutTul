var JoiVap = require("joi")

let UsrSchemaVar = JoiVap.object().keys({
    "NamVak": JoiVap.string().alphanum().min(3).max(30).required(),
    "MobVak": JoiVap.string().length(10).regex(/^[6-9][0-9]{9}$/).required(),
    "MylVak": JoiVap.string().email({ minDomainAtoms: 2 }).required(),
    "PwdVak": JoiVap.string().regex(/^[a-zA-Z0-9]{8,20}$/).required()
})

var UsrVar = {
    "NamVak": "Thanuja",
    "MobVak": "6361299541",
    "MylVak": "thanuja@everi.com",
    "PwdVak": "thanuja123"
}

var CheckResVar = JoiVap.validate(UsrVar,UsrSchemaVar)

console.log(CheckResVar)