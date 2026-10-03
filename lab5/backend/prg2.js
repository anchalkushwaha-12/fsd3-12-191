import express from "express";
const app =express();
import {fileURLToPath} from "node:url";
const app=express()
const filename=fileURLToPath(import.meta.url);
const dirname=path.dirname(filename);
app.get("/",(req,res)=>{ });

app.listen(4444,()=>console.log("prg2 is runing"));