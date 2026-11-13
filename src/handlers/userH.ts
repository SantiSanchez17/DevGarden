import { Request, Response } from 'express'
import slug from 'slug'
import UserModel from "../models/User"
import { haspassword } from '../utils/auth'
import { validationResult } from 'express-validator'

export const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body) return res.status(400).send('El cuerpo esta vacio o incompleto')

        let errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { email, password } = req.body

        if (await UserModel.findOne({ email })) return res.status(409).send('Ya hay un usuario con este correo');
        const user = new UserModel(req.body)

        const handle = slug(req.body.handle);
        if (await UserModel.findOne({ handle })) return res.status(409).send('Ya existe este handle');

        user.password = await haspassword(password);
        user.handle = handle;
        await user.save(req.body);

        if (!user) {
            res.status(201).send('No se pudo registrar el usuario');
        }
        res.send('Se registro el usuario correctamente');
    } catch (error) {
        console.log('Error', error);
        res.status(400).send('No se pudo registrar el usuario');
    }
}