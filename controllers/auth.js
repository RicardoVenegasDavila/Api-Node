const { response } = require('express');



const crearUsuario = (req, res) => {




    const { email, name, password } = req.body;
    return res.json({
        ok: true,
        mgs: 'crear un nuevo usuario'
    })
}

const loginUsuario = (req, res) => {

    const { email, password } = req.body;


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