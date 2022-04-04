const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();


router.post('/new',
[
    check('name','El nombrel es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','El pasword es obligatorio').isLength({min:6}),
    validarCampos,
], crearUsuario);
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El pasword es obligatorio').isLength({min:6}),
    validarCampos
] ,loginUsuario);

// validar y revalidar token

router.get('/renew', revalidarToken);




module.exports = router;