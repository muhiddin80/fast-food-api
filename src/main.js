import app from "./app.js";
import connectDB from "./config/mongo.config.js";
import APP_PORT from "./config/app.config.js"

await connectDB()

app.listen(APP_PORT,()=>{
    console.log(`The server is running on port ${APP_PORT}`)
});