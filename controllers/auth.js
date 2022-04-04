const { response } = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req, res) => {


    const {email,name,password} = req.body;
    console.log(email,name,password)

    return res.json({
        ok: true,
        mgs: 'crear un nuevo usuario'
    })
}

const loginUsuario = (req, res) => {

    const errors = validationResult(req);

    if ( ! errors.isEmpty() ){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    const {email,password} = req.body;
    console.log(email,password)

    return res.json({
        ok: true,
        mgs: 'logien de usuarios'
    })
}


const revalidarToken = (req, res) => {

    return res.json({
        ok: true,
        mgs: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}