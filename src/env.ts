import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({path:resolve(__dirname, "../.env")});

const env:any = {...process.env};

console.log(env);


export default env;