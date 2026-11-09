import colors from 'colors'
import server from "./server";

const puerto = process.env.PORT || 4000;

server.listen(puerto, ()=>{
    console.log(colors.magenta.bold('funca'));
})