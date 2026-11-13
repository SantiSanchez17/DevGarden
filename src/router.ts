import { Router } from 'express';
import { createUser } from './handlers/userH';
import { body } from 'express-validator'
const router = Router()

router.post('/auth/registro',
    body(['name', 'handle', 'email', 'password'])
        .notEmpty()
        .withMessage('Hay campos vacios'),
    body('email')
        .isEmail()
        .withMessage('Formato de correo invalido'),
    createUser)

router.get('/', (req, res) => {
    res.send('Inicio')
})

router.get('/nuestro', (req, res) => {
    res.send('Nuestros jardineros')
})

router.get('/bonos', (req, res) => {
    res.send('Abonos y beneficios')
})

export default router