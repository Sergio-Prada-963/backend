import app from "./app.js";
const main = ()=>{
    app.listen(app.get("port"));
    console.log(`esperando great que funcioneee ${app.get("port")}`);
}
main();