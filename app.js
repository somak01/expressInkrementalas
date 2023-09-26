 import express from "express";
import { fileURLToPath } from "url";
import { dirname, sep } from "path";
import { loginRouter } from "./routes/loginRoute.js";
import { mainRouter } from "./routes/mainRoute.js";
import { logoutRouter } from "./routes/logoutRoute.js";
import session from "express-session";

//.
//__dirname for es6 modules
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;


const cfg = {
    port:3002,
    dir: {
        root: __dirname,
        routes: __dirname + "routes" + sep,
        static: __dirname + "static" + sep,
        views: __dirname + "views" + sep,
        data: __dirname + "data" + sep,
        lib:__dirname + "lib" + sep,
    }
}


const app = express();

app.use(session({
    secret:"thisismysecret",
    resave:false,
    saveUninitialized:false,
}));



app.set("view engine", "ejs");
app.set("views", cfg.dir.views);

//Middleware to log the actual request url
app.use((req, res, next) => {

    if (req.url.endsWith(".css") || req.url.endsWith(".js")) {
        return next();
    }
    console.log(cfg.dir);
    console.log(req.url);
    next();
})

//Middleware that enables the usage of static files
app.use(express.static(cfg.dir.static));

//BUilt-in express url to parse json files
app.use(express.json());
app.use(express.urlencoded({extended:true,}));

app.use("/login/", loginRouter);
app.use("/main/", mainRouter);
app.use("/logout", logoutRouter);

app.get("/", (req, res) => {
    res.send("Something");
})


app.listen(cfg.port, () => {
    console.log(`Local server running on http:/localhost:${cfg.port}`);
});