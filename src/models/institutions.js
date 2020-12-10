const mongoose = require("mongoose");

const institutionsSchema = new mongoose.Schema({
    id: {type: Number},
    name:{type: String},
    curso: {type: String},
    tipoDeFormação: {type: String},
    duracao : {type: String},
    periodoInscricao: {type: String},
    site: {type: String},
    activeSubscriptions: {type: Boolean}
},{
    versionKey: false
});

const institutions = mongoose.model("institutions", institutionsSchema);

module.exports = institutions;