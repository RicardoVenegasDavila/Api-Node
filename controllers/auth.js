const bcrypt = require('bcryptjs/dist/bcrypt');
const { response } = require('express');
const Usuario = require('../models/Usuario')



const crearUsuario = async (req, res) => {

    const { email, name, password } = req.body;



    try {

        //Verificar el email

        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'el usuario ya existe con ese email'
            })
        }

        //crear usuario con el model

        const dbUser = new Usuario(req.body);

        //Hashear la contraseña (encriptar la contraseña)

        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password,salt);
        //Generar el JWT

        //Crear usuario de base de datos

        await dbUser.save();
        //Generar la respuesta exitosa

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
        })

    } catch (error) {
        return res.status(500).json({
            ok: true,
            mgs: 'por favor hable con el administrador'
        })
    }




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