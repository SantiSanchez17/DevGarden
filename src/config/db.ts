import mongoose from "mongoose";

export const conectionDB = async () => {
    const mongoPassword = process.env.MONGODB_PASSWORD;
    const mongoUser = process.env.MONGODB_USER;
    const mongoDB = process.env.DB;

    try {
        const url = `mongodb+srv://ssanchezg:yVRdz3V5PlpNMQLf@cluster1.nt6fvoc.mongodb.net/devgarden`
        const { connection } = await mongoose.connect(url)
        const conectInfo = `${connection.host}:${connection.db.databaseName}`
        console.log('Conectado exitosamente', conectInfo);
    } catch (error) {
        console.log(error.message);
    }
}