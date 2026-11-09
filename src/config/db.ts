import colors from 'colors'
import mongoose from "mongoose";

export const conectionDB = async () => {
    const mongoPassword = process.env.MONGODB_PASSWORD;
    const mongoUser = process.env.MONGODB_USER;
    const mongoDB = process.env.DB;

    try {
        const url = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster1.nt6fvoc.mongodb.net/${mongoDB}`
        const { connection } = await mongoose.connect(url)
        const conectInfo = `${connection.host}:${connection.db.databaseName}`
        console.log(colors.blue.bold('Conectado exitosamente'), colors.cyan.bold(conectInfo));
    } catch (error) {
        console.log(colors.red.bold(error.message));
    }
}