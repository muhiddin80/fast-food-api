import express from "express";
import router from "./routes/index.js";
import Joi from "joi";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api",router)

app.all("/*", (req,res)=>{
    res.status(404).send({
        message: `Given url: ${req.url} with method : ${req.method} not found`
    });
});

export default app;