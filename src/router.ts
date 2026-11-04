import { Router } from 'express'

const router = Router()

router.post('/auth/registro', (req, res) => {
    console.log('Log In:', req.body);
})

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