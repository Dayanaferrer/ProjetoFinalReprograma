const institutions = require('../models/institutions')

const getAllInstitutions = (req, res) => {
    institutions.find(function (err, institutions) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(institutions)
        }
    })
}

const getByOrganizatioName = (req, res) => {
    const name = req.params.name
    institutions.find({ name }, function (err, institutions) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(institutions)
        }
    })
}

const getActiveSubscriptions = (req, res) => {
    const active = req.params.active
    institutions.find({ active, activeSubscriptions : true }, function (err, institutions) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(institutions)
        }
    })
}

const postInstitutions = (req, res) => {
    console.log(req.institution);
    institutions.countDocuments((err, count) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            const institution = new institutions(req.body);
            institution.id = count +1;
            institution.save( (err) => {
                if (err) {
                    res.status(500).send({ message: err.message })
                } else {
                    res.status(200).send({
                        message: 'Institution successfully registered!!!'                    
                    })
                }
            })
        }
    })
}

const putInstitutions = (req, res) => {
    const id = req.params.id
    institutions.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Institution successfully changed!"})
        }
    })
}

const deleteInstitutions = (req, res) => {
    const id = req.params.id;
    institutions.find({ id }, function(err, institution){
        if(institution.length > 0){
            institutions.deleteMany({ id }, function(err){
                if(err) {
                    res.status(500).send({ message: err.message })
                }
                res.status(200).send({ message: 'Institution sucessfully removed!'})
            })
        } else{
            res.status(200).send({ message: 'There is no institution to be changed!'})
        }
    })
}

module.exports = {
    getAllInstitutions,
    getByOrganizatioName,
    getActiveSubscriptions,
    postInstitutions,
    putInstitutions,
    deleteInstitutions
}