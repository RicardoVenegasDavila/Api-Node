const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');


const router = Router();


router.post('/new', crearUsuario);
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El pasword es obligatorio').isLength({min:6})
] ,loginUsuario);

// validar y revalidar token

router.get('/renew', revalidarToken);




module.exports = router;